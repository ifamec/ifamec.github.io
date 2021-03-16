const foot_meter = 1 / 3.2808
const form = $('#unit-content')
const unit_length = {
    'kilometer':  {ratio: 1000,                 map: ''             },
    'meter':      {ratio: 1,                    map: ''             },
    'decimeter':  {ratio: 0.1,                  map: ''             },
    'centimeter': {ratio: 0.01,                 map: ''             },
    'millimeter': {ratio: 0.001,                map: ''             },
    'micrometer': {ratio: 0.000001,             map: ''             },
    'inch':       {ratio: foot_meter / 12,      map: ''             },
    'foot':       {ratio: foot_meter,           map: ''             },
    'yard':       {ratio: foot_meter * 3,       map: ''             },
    'fathom':     {ratio: foot_meter * 6,       map: ''             },
    'fur':        {ratio: foot_meter * 660,     map: ''             },
    'mile':       {ratio: foot_meter * 5280,    map: ''             },
    'nmile':      {ratio: 1852,                 map: "nautical mile"},
    'li':         {ratio: 500,                  map: "里"           },
    'zhang':      {ratio: 10 / 3,               map: "丈"           },
    'chi':        {ratio: 1 / 3,                map: "尺"           },
    'cun':        {ratio: 1 / 30,               map: "寸"           },
    'fen':        {ratio: 1 / 300,              map: "分"           },
    'lii':        {ratio: 1 / 3000,             map: "厘"           }
}
export const exec = () => {
    const fields = Object.keys(unit_length)
    let content = ``
    fields.forEach(item => {
        const input =  `<div class="unit-item">
                            <label class="unit-label">${unit_length[item]["map"] || item}</label>
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
        const sanitize = Number(value) * unit_length[id]["ratio"]
        fields.forEach(id => {
            $(`#${id}`).val(sanitize / unit_length[id]["ratio"])
        })
    })
    $('#clearAll').on('click', () => {
        fields.forEach(id => {
            $(`#${id}`).val('')
        })
    })
}