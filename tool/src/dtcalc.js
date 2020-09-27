
export const dtcalc_ui = (targetId) => {
	const today = new Date()
	const t_ymd = {
		year: today.getFullYear(),
		month: today.getMonth() + 1,
		day: today.getDay()
	}
	const date_input = (c_type, c_date) => {
		c_date = c_date || {year: '', month: '', day: ''}
		return `
			<input size="6" id="${c_type}y" value="${c_date.year}" />年
			<input size="4" id="${c_type}m" value="${c_date.month}" />月
			<input size="4" id="${c_type}d" value="${c_date.day}" />日
		`
	}
	const calc_date = () => {
		const d_input = date_input('c_date_', t_ymd)
		const toward = `<select id="">
							<option value="" selected>向后</option>
							<option value="-">向前</option>
						</select>`
		const delta = `<input size="6" id="c_date_delta" value="100"/>`
		return `<div class="dt_cal" id="c_date">
					<div><b>推算:</b></div>
					${d_input}${toward}
					${delta}<span>天</span>
					<div id="c_date_result">是</div>
				</div>`
	}
	const calc_delta = () => {
		const d_input_1 = date_input('c_delta_1_', t_ymd)
		const d_input_2 = date_input('c_delta_2_')
		return `<div class="dt_cal" id="c_delta">
					<div><b>相差:</b></div>
					${d_input_1}<br/>${d_input_2}
					<div id="c_delta_result">相差</div>
				</div>`
	}
	const calc_to_luna = () => {
		const d_input = date_input('c_to_luna_', t_ymd)
		return `<div class="dt_cal" id="c_to_luna">
					<div><b>转农历:</b></div>
					${d_input}
					<div id="c_to_luna_result">是</div>
				</div>`
	}
	const calc_ss_cz = () => {
		const d_input = date_input('c_ss_cz_', t_ymd)
		return `<div class="dt_cal" id="c_ss_cz">
					<div><b>星座生肖:</b></div>
					${d_input}
					<div id="c_ss_cz_result">是</div>
				</div>`
	}
	$(targetId).append(calc_date()+calc_delta()+calc_to_luna()+calc_ss_cz())
	$('.dt_cal').css({
		"padding": "20px 0"
	})
}