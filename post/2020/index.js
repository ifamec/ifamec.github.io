const loadContent = (url) => { //'./src/0916_Test.md'
    $.ajax({
        type: 'get',
        url: 'src/' + url,
        dataType: 'html',
        success: (res) => {
            $('#content').html(marked(res));
        }
    })
}
const buildSidebarList = (list) => {
    list.forEach( i => {
        const a = $('<a href="#" title="' + i + '"> ' + i + ' </a>')
        $('#sidebar').append(a)
    })
}

(() => {
    $.ajax({
        type:'get',
        url: 'meta.json',
        dataType: 'json',
        success: (res) => {
            const fileName = res.filename || []
            buildSidebarList(fileName)
        }
    })
})()

let isSidebarHidden = false;
$('#btn-sidebar').text(isSidebarHidden ? '☰' : '✕');

$(document).on('click', function (e) {
    const target =      $(e.target)
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
    if (target.prop('tagName') && /^\d{4}_/i.test(target.attr('title'))) {
        loadContent(target.attr('title'))
        hideSidebar()
    }
})