
export const csv2md_ui = (targetId) => {
	const delimiter = [
		['tab', 'Tab Separated'      ],
		[',',   'Comma Separated'    ],
		[';',   'Semicolon Separated']
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
					<span> | </span>
					<div class="tools">
						${label('delimiter')}
						<select id="delimiter">${optionGroup(delimiter, ',')}</select>
					</div>`;
	$(targetId).append(`
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

export const csv2md_fn = (events, handler) => {
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
	const csv2md = () => {
		// TODO
		return 'Coming Soon'
	}
	const update = () => {
		const [value, deli, header] = [input.val().trim(), get_deli(), isheader.prop('checked')]
		output.val(csv2md(value, deli, header) + value)
	}
	input.on('keydown', (e) => {
		console.log(e.key)
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


