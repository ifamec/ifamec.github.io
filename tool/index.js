(() => {
	const isIE = window.navigator.userAgent.indexOf("MSIE ");
	console.log(window.navigator.userAgent)
	if (isIE > 0 || !!navigator.userAgent.match(/Trident.*rv:11\./)) {
		alert('NO IE')
		location.href = location.hostname
	}
})()
// BAIL IF IE



import * as csv2md from './src/csv2md.js'

csv2md.csv2md_ui('#content')
