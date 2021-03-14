'use strict'
const version = '1.0'
const functions = {
    length:['kilometre', 'metre', 'centimeter', 'mile', 'yard', 'foot', 'inch', '里', '丈', '尺', '寸', '分', '厘', 'decimeter', 'millimeter', 'micrometer', 'nautical mile', 'fathom', 'fur'],
}
const header = `<div style='padding-bottom: 10px'><span id='tool-version'>v ${version}</span>Current: <span id='current-content'></span></div>
                <div class='nav'>
                    <a id='nav_length'>Length</a>
                    <a id='nav_temperature'>Temperature</a>
                    <a id='nav_power'>Power</a>
                    <a id='nav_speed'>Speed</a>
                    <a id='nav_mass'>Mass</a>
                    <a id='nav_area'>Area</a>
                    <a id='nav_volume'>Volume</a>
                    <a id='nav_pressure'>Pressure</a>
                </div>`
const unit_template = (fn) => {
    const currentContent = fn || 'length'
    const fields = functions[currentContent]
    const label = $('#current-content')
    if (!fields) {
        label.text('Error')
        return `<b>Error</b>`
    }
    label.text(currentContent)
    let rtnval = ``
    fields.forEach(item => {
        const input =  `<div class="unit-item">
                            <label class="label">${item}</label>
                            <input class="value" id="${item}" name="${item}"/>
                        </div>`
        rtnval += input
    })
    return rtnval
}
export const unit_ui = (targetId) => {
    $(`<style>
        .unit-content {
            padding: 10px 0;
        }
        .unit-item {
            width: 50%;
            font-size: 16px;
            display:  inline-block;
            padding: 10px 5%;
        }
        .label {
            width: 30%;
            display:  inline-block;
            text-align: right;
        }
        .value {
            width: 60%;
            font-size: 20px;
        }
       
        @media only screen and (max-width: 480px) {
            .unit-item {
                width: 100%;
            }
        }
    </style>`).appendTo('head')
    const ui = header + `<div id="unit-content"></div>`
    $(targetId).append(ui)
    $('#unit-content').html(unit_template())
}
export const unit_fn = () => {
    // Load
    $('.nav a').on('click', (e) => {
        const id = e.currentTarget.id
        $('#unit-content').html(unit_template(id.replace('nav_', '')))
    })
}