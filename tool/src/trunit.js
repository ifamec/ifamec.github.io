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
    const form = $('#unit-content')
    import (`./utils/unit_sets.js`)
        .then(module => {
            const set = module[`unit_${currentContent}`]
            const fields = Object.keys(set.relation)
            label.text(currentContent)
            let content = ``
            fields.forEach(item => {
                const input =  `<div class="unit-item">
                                    <label class="unit-label">${set.mapping[item] || item}</label>
                                    <input class="unit-value" id="${item}" name="${item}" type="number" step="any"/>
                                </div>`
                content += input
            })
            // inputs
            form.html(content + `<div class="unit-item" style="text-align: center"><div id="clearAll" >Clear All</div></div>`)
            form.get(0).addEventListener('change', (e) => {
                const [value, id] = [e.target.value, e.target.id]
                if (value === '') {return;}
                console.log(value, id)
                const sanitize = Number(value) * set.relation[id]
                fields.forEach(id => {
                    $(`#${id}`).val(sanitize / set.relation[id])
                })
            })
            $('#clearAll').on('click', () => {
                fields.forEach(id => {
                    $(`#${id}`).val('')
                })
            })
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