let latestFileName, fileNameList;
const isLatestDefault = true;

(() => {
    $.ajax({
        type:'get',
        url: 'meta.json',
        dataType: 'json',
        success: (res) => {
            /**
             * @param {{fileStat: Object}} res
             * @param {{fileName: String}} o
             */
            const fileStat = res.fileStat || {}
            fileNameList = fileStat.map( o => o.fileName )
            latestFileName = fileNameList[0]
            buildSidebarList(fileStat)
            loadContent(isLatestDefault ? latestFileName : 'Main.md')
        }
    })
})()
const pushState = (url) => { history.pushState(undefined, '', url)}
const loadContent = (url) => { //'./src/0916_Test.md'
    url = fileNameList.includes(url) ? url : '404.md'
    $.ajax({
        type: 'get',
        url: 'src/' + url,
        dataType: 'html',
        success: (res) => {
            $('#content').html(marked(res));
        }
    })
    pushState(`#${url.replace('.md', '')}`)
    if (url === '404.md') {
        setTimeout(() => {
            loadContent(latestFileName)
            pushState(`#${latestFileName.replace('.md', '')}`)
        }, 5000)
    }
}
const getYYMMDD = (date) => {
    date = new Date(date)
    const doubleDigit = (d) => ("0" + d).slice(-2)
    return [date.getFullYear().toString().slice(-2), doubleDigit(date.getMonth() + 1), doubleDigit(date.getDate())].join("")
}
const buildSidebarList = (list) => {
    list.forEach( i => {
        const href = i.fileName.replace('.md', '')
        const title = `${getYYMMDD(i.birthtime)}-${href}`
        const a = $('<a href="#' + href + '" title="' + title + '"> ' + title + ' </a>')
        $('#sidebar').append(a)
    })
    $('#sidebar').append('<a href="#404" title="PageNotFound">Page Not Found</a>')
}


let isSidebarHidden = true;
// initial sidebar
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
    if (target.parent().attr('id') === 'sidebar' && target.attr('title')) {
        loadContent(target.attr('title').replace(/^\d+-/, '') + '.md')
        hideSidebar()
    }
})