'use strict'
const version = '1.0'
export const csv2md_ui = (targetId) => {
	const delimiter = [
		['tab', 'Tab'      ],
		[',',   'Comma'    ],
		[';',   'Semicolon']
	]
	const label = (f) => 				`<label for="${f}"></label>`
	const text = (id, row, p) => 		`${label(id)}</label><textarea id="${id}" rows="${row}" ${p || ''}></textarea>`
	const option = (val, text, p) =>	`<option value="${val}" ${p || ''}>${text}</option>`
	const optionGroup = (source, s) => 	source.map(a => option(a[0], a[1], s && s === a[0] ? 'selected' : '')).join('')
	const toolbar = `<div class="tools">
						${label('isHeader')}
						<input type="checkbox" checked="checked" id="isheader" />
						<span>First Line is Header</span>
					</div>
					<span>&emsp;|&emsp;</span>
					<div class="tools">
						<span>Delimiter:</span>
						${label('delimiter')}
						<select id="delimiter">${optionGroup(delimiter, ',')}</select>
					</div>`;
	$(targetId).append(`
		<div id="tool-version"><span>v</span><span>${version}</span></div>
		<div class="text">${text('input', 20)}</div>
		<div class="toolbar">${toolbar}</div>
		<div class="text">${text('output', 20, 'readonly')}</div>
	`)
	$('.tools').css('display', 'inline-block')
	$('.toolbar').css('padding', '8px 0')
	$('textarea').css({
		"font-family": 	"monospace",
		"width": 		"100%",
		"height": 		"auto",
		"resize": 		"none",
	})
}

export const csv2md_fn = () => {
	const input = $('#input')
	const output = $('#output')
	const isheader = $('#isheader')
	const delimiter = $('#delimiter')
	const insert = (f, v) => {
		// firefox sucks
		if (f.selectionStart || f.selectionStart === '0') {
			const [s, e] = [f.selectionStart, f.selectionEnd]
			f.value = f.value.substring(0, s) + v + f.value.substring(e, f.value.length)
			f.selectionEnd = f.selectionStart = s + v.length
		} else {
			f.value += v
		}
	}
	const get_deli = () => {
		let d = delimiter.val()
		return d === 'tab' ? '\t' : d
	}
	const csv2md = (text, deli, isheader) => {
		deli = deli || '\t'
		text = deli === '\t' ? text : text.replace(/\t/g,'    ')
		const rowSplitRegex = new RegExp(deli + '(?![^"]*"\\B)')
		let data = [], rlm = []
		text.split('\n').forEach((e, i) => {
			if (typeof data[i] === 'undefined') { data[i] = [] }
			e.split(rowSplitRegex).forEach((val, idx) => {
				if (! rlm[idx]) { rlm[idx] = 0; }
				val = val.replace(/([|\\])/g, '\\$1')
				rlm[idx] = Math.max(rlm[idx], val.length)
				data[i][idx] = val
			})
		})
		let o_header = '', o_deli = '', o_row = ''
		rlm.forEach((l) => {
			const s = Array(l + 3)
			o_header += '|' + s.join(' ')
			o_deli += '|' + s.join('-')
		})
		o_header += '| \n'
		o_deli += '| \n'
		if (isheader) { o_header = '' }
		data.forEach((col, i) => {
			rlm.forEach((len, ix) => {
				const row = typeof col[ix] === 'undefined' ? '' : col[ix]
				const out = '| ' + row + Array((len - row.length) + 1).join(' ') + ' '
				if (isheader && i === 0) { o_header += out } else { o_row += out }
			})
			if (isheader && i === 0) { o_header += '| \n' } else { o_row += '| \n' }
		})
		return '' + o_header + o_deli + o_row
	}
	const update = () => output.val(csv2md(input.val().trim(), get_deli(), isheader.prop('checked')))
	input.on('keydown', (e) => {
		if (e.key.toLowerCase() === 'tab') {
			e.preventDefault()
			insert(e.target, '\t')
		}
	})
	input.on('keyup', () => {update()})
	isheader.on('change',  () => {update()})
	delimiter.on('change', () => {update()})
	output.on('click', (e) => {e.target.select()})
	update()
}


