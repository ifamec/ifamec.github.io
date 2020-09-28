'use strict'
const content = $('#content')
$('#nav').on('click', (e) => {
	const item_id = $(e.target).attr('id')
	switch (item_id) {
		case 'csv2md': load_csv2md(); break
		case 'dtcalc': load_dtcalc(); break
		case 'empty':  empty();       break
	}
})

const pushState = (url) => { history.pushState(undefined, '', url)}
const load_csv2md = () => {
	content.empty()
	pushState('#csv2md')
	import('./src/csv2md.js')
		.then(module => {
			module.csv2md_ui('#content')
			module.csv2md_fn()
		})
		.catch(error => {
			content.append(`<a>${error}</a>`)
		})
}
const load_dtcalc = () => {
	content.empty()
	pushState('#dtcalc')
	import('./src/dtcalc.js')
		.then(module => {
			module.dtcalc_ui('#content')
			module.dtcalc_fn()
		})
		.catch(error => {
			content.append(`<a>${error}</a>`)
		})
}
const empty = () => {
	content.empty()
	history.replaceState(null, null, ' ');
	content.append('<a>Please Select In Navbar</a>')
}
if (window.location.hostname === 'localhost') {}