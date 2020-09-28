
export const dtcalc_ui = (targetId) => {
	const make_date = (d) => {
		return [
			d.getFullYear(),
			("0" + (d.getMonth() + 1)).slice(-2),
			("0" + d.getDate()       ).slice(-2)
		].join('-')
	}
	const default_today = make_date(new Date())

	const label = (f) => `<label for="${f}"></label>`
	const calc_date = () => {
		const date_input = `${label('c_date_i')}<input type="date" id="c_date_i" value="${default_today}">`
		const toward = `${label('c_date_o')}
						<select id="c_date_o">
							<option value="+" selected>Backward</option>
							<option value="-">Forward</option>
						</select>`
		const delta = `${label('c_date_e')}<input size="6" id="c_date_e" value="100"/><span>Days</span>`
		return `<div class="dt_cal" id="c_date">
					<div><b>Forward or backward X days:</b></div>
					${date_input}&emsp;${toward}&emsp;${delta}
					<div class="results" id="c_date_result"></div>
				</div>`
	}
	const calc_delta = () => {
		const date_i_1 = `${label('c_delta_1')}<input type="date" id="c_delta_1" value="${default_today}">`
		const date_i_2 = `${label('c_delta_2')}<input type="date" id="c_delta_2" value="2020-09-15">`

		return `<div class="dt_cal" id="c_delta">
					<div><b>By X days:</b></div>
					${date_i_1} and ${date_i_2}
					<div class="results" id="c_delta_result"></div>
				</div>`
	}
	$(targetId).append(calc_date() + calc_delta())
	$('.dt_cal').css("padding", "20px 0")
	$('.results').css({
		"font-weight": "bold",
		"padding": "5px 0"
	})
}
export const dtcalc_fn = () => {
	// Calculate Date
	const cal_date = () => {
		const c_date = {
			date:      $('#c_date_i').val(),
			operation: $('#c_date_o').val(),
			delta:     $('#c_date_e').val()
		}
		const build_new_date = () => {
			const new_date = new Date(c_date.date + '').getTime()
			const delta = Number(`${c_date.operation}${c_date.delta}`) * 24000 * 3600
			if (isNaN(delta)) {return 'Invalid Number'}
			const date = new Date(new_date + delta)
			return 'is ' + [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-')
		}
		return $('#c_date_result').text(build_new_date())
	}
	cal_date()
	$('#c_date_i').on('change', () => { cal_date() })
	$('#c_date_o').on('change', () => { cal_date() })
	$('#c_date_e').on('keyup',  () => { cal_date() })

	// Calculate Delta
	const cal_delta = () => {
		const delta = new Date($('#c_delta_1').val()) - new Date($('#c_delta_2').val())
		const result = Math.abs(delta / 86400000).toString()
		return $('#c_delta_result').text(`are ${result} day${['0', '1'].includes(result) ? '' : 's'} difference.`)
	}
	cal_delta()
	$('#c_delta input').on('change', () => { cal_delta() })

}