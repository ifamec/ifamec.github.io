// Define Variable
let latestFileName, fileNameList, queryObject, isDebugMode, fileYearList;
// Set State
const isLatestDefault = true;
let isSidebarHidden = true;

// Helper Functions
const pushState = (url) => { history.pushState(undefined, '', url)}
const getDateInfo = (date, str) => {
    date = new Date(date)
    const doubleDigit = (d) => ("0" + d).slice(-2)
    let rtnval = date
    switch (str) {
        case 'MMDD': rtnval = [doubleDigit(date.getMonth() + 1), doubleDigit(date.getDate())].join(""); break
        case 'YYYY': rtnval = date.getFullYear(); break
    }
    return rtnval
}
const buildSidebarList = (list) => {
    fileYearList.forEach( i => {
        $('#sidebar').append('<div id="' + 'sidebar-' + i + '"><a class="sidebar-ttl">' + i + '</a></div>')
    })
    list.forEach( i => {
        const title = i.fileName.replace('.md', '')
        const year = getDateInfo(i.birthtime, 'YYYY')
        const text = `${getDateInfo(i.birthtime, 'MMDD')}-${title}`
        const a = $('<a title="' + title + '" class="sidebar-btn"> ' + text + ' </a>')
        $(`#sidebar-${year}`).append(a)
    })
    if (isDebugMode) {
        $('#sidebar').append('<a title="PageNotFound" class="sidebar-404">Page Not Found</a>')
    }
}
const loadContent = (url) => {
    url = fileNameList.includes(url) ? url : '404'
    $.ajax({
        type: 'get',
        url: 'src/' + url + '.md',
        dataType: 'html',
        success: (res) => {
            $('#content').html(marked(res));
            pushState(`#${url}`)
        }
    })
    if (url === '404') {
        setTimeout(() => {
            loadContent(latestFileName)
            pushState(`#${latestFileName}`)
        }, 5000)
    }
}

(() => {
    // PageLoad
    $.ajax({
        type:'get',
        url: 'meta.json',
        dataType: 'json',
        success: (res) => {
            /**
             * @param {{fileStat: Object}} res
             * @param {{fileName: String}} o
             * @param {{enableDebugMode: String}} queryObject
             */
            queryObject = new URLSearchParams(window.location.search.slice(1))
            isDebugMode = queryObject.get('enableDebugMode') === 'true'

            const fileStat = res.fileStat || {}
            fileNameList = fileStat.map( o => o.fileName )
            fileYearList = Array.from(new Set(fileStat.map( o => getDateInfo(o.birthtime, 'YYYY')))).sort()
            latestFileName = fileNameList[0]
            buildSidebarList(fileStat)
            loadContent(isLatestDefault ? latestFileName : 'Main')
        }
    })
    // Sidebar Initiation
    $('#btn-sidebar').text(isSidebarHidden ? '☰' : '⨉');
    $('.sidebar').css('width', isSidebarHidden ? '0' : '320px');
    $(document).on('click', function (e) {
        const target =    $(e.target)
        let sidebar =     $('#sidebar')
        let btn_sidebar = $('#btn-sidebar')

        const hideSidebar = () => {
            sidebar.css('width', '0px');
            btn_sidebar.text('☰');
            isSidebarHidden = !isSidebarHidden;
        }
        switch (target.attr('id')) {
            case 'btn-sidebar':
                sidebar.css('width', isSidebarHidden ? '320px' : '0px');
                isSidebarHidden = !isSidebarHidden;
                btn_sidebar.text(isSidebarHidden ? '☰' : '✕');
                break;
            case 'content':
                if (! isSidebarHidden) { hideSidebar() }
                break;
        }

        const targetTitle = target.attr('title')
        if (targetTitle && (/^sidebar-\d{4}/i.test(target.parent().attr('id')) || targetTitle === 'PageNotFound' )) {
            loadContent(target.attr('title'))
            hideSidebar()
        }
    })
})()
