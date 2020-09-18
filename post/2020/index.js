const loadContent = (url) => { //'./src/0916_Test.md'
    $.ajax({
        type: 'get',
        url: 'src/' + url + '.md',
        dataType: 'html',
        success: function (res) {
            $('#content').html(marked(res));
        }
    })
}

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