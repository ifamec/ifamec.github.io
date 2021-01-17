// Define Variable
let latestFileName, fileNameList, queryObject, isDebugMode, fileYearList, isMobile;
// Set State
const devDebugMode = window.location.hostname === 'localhost';
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
        const text = title
        const a = $('<a title="' + title + '" class="sidebar-btn"> ' + text + ' </a>')
        $(`#sidebar-${year}`).append(a)
    })
    if (isDebugMode) {
        $('#sidebar').append('<a title="PageNotFound" class="sidebar-404">Page Not Found</a>')
    }
}
const loadContent = (url) => {
    url = url.replace(/[ ]/g, '_')
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
            isDebugMode = queryObject.get('enableDebugMode') === 'true' || devDebugMode

            const fileStat = res.fileStat || {}
            fileNameList = fileStat.map( o => o.fileName.replace(/[ ]/g, '_') )
            fileYearList = Array.from(new Set(fileStat.map( o => getDateInfo(o.birthtime, 'YYYY')))).sort().reverse()
            latestFileName = fileNameList[0]
            isMobile = matchMedia('(max-width: 480px)').matches
            buildSidebarList(fileStat)
            loadContent(isLatestDefault ? latestFileName : 'Main')
        }
    })
    // Sidebar Initiation
    const setSidebarWidth = (wid) => {
        const sidebarWidth = isSidebarHidden ? '0' : (isMobile ? '100%' : '400px')
        $('#sidebar').css('width', wid || sidebarWidth)
    }
    const setSidebarText = (str) => {
        const sidebarText = str ? str : (isSidebarHidden ? '☰' : '⨉')
        $('#btn-sidebar').text(sidebarText)
    }
    const updateSidebar = (w, s) => {
        setSidebarWidth(w)
        setSidebarText(s)
    }
    const hideSidebar = () => {
        updateSidebar('0px', '☰')
        isSidebarHidden = !isSidebarHidden
    }
    // Initial sidebar state
    updateSidebar()

    // Window Resize eventListener
    $(window).on('resize', () => {
        isMobile = matchMedia('(max-width: 480px)').matches
        setSidebarWidth()
    })
    // Container click eventListener
    $('#container').on('click', (e) => {
        const target = $(e.target)
        // If click on container but not on btn-sidebar, hide sidebar
        if (target.attr('id') !== 'btn-sidebar' && ! isSidebarHidden) { hideSidebar() }
    })
    // General document click eventListener
    $(document).on('click',  (e) => {
        const target =    $(e.target)
        const targetTitle = target.attr('title')

        if (isDebugMode) { console.log(target) }

        switch (target.attr('id')) {
            case 'btn-sidebar':
                isSidebarHidden = !isSidebarHidden;
                updateSidebar()
                break;
        }
        if (targetTitle && (/^sidebar-\d{4}/i.test(target.parent().attr('id')) || targetTitle === 'PageNotFound' )) {
            loadContent(target.attr('title'))
            hideSidebar()
        }
    })
})()
