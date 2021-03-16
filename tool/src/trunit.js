'use strict'
const version = '1.0'
const header = `<div style='padding-bottom: 10px'><span id='tool-version'>v ${version}</span>Current: <span id='current-content'></span> | Hit <b>Enter</b> To Execute</div>
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
    const label = $('#current-content')
    import (`./utils/unit.js`)
        .then(module => {
            label.text(currentContent)
            module.exec(currentContent)
        })
        .catch(error => {
            label.text('Error: ' + error)
        })
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
        .unit-label {
            width: 30%;
            display:  inline-block;
            text-align: right;
        }
        .unit-value {
            width: 60%;
            font-size: 20px;
        }
        #clearAll {
            cursor: pointer;
            background-color: lightgray;
        }
       
        @media only screen and (max-width: 480px) {
            .unit-item {
                width: 100%;
            }
        }
    </style>`).appendTo('head')
    $(targetId).append(header + `<form id="unit-content"></form>`)
    unit_template()
}
export const unit_fn = () => {
    // Load
    $('.nav a').on('click', (e) => {
        const id = e.currentTarget.id
        unit_template(id.replace('nav_', ''))
    })
}