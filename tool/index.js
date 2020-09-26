import * as csv2md from './src/csv2md.js'
const content = $('#content')
$('#nav').on('click', (e) => {
	const item_id = $(e.target).attr('id')
	switch (item_id) {
		case 'csv2md': load_csv2md(); break
		case 'empty':  empty();       break
	}
})

const load_csv2md = () => {
	content.empty()
	csv2md.csv2md_ui('#content')
	csv2md.csv2md_fn()
}
const empty = () => {
	content.empty()
	content.append('<a>Please Select In Navbar</a>')
}