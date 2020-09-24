
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

export const csv2md_fn = () => {

}


