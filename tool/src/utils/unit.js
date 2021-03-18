const foot_meter = 1 / 3.2808
const kg_pound = 0.45359237
const tGrain_grain = 0.45359237 / 7000
const unit_sets = {
    'length': {
        'kilometer':  {ratio: 1000,                 map: "Kilometer"    },
        'meter':      {ratio: 1,                    map: "Meter"        },
        'decimeter':  {ratio: 0.1,                  map: "Decimeter"    },
        'centimeter': {ratio: 0.01,                 map: "Centimeter"   },
        'millimeter': {ratio: 0.001,                map: "Millimeter"   },
        'micrometer': {ratio: 0.000001,             map: "Micrometer"   },
        'inch':       {ratio: foot_meter / 12,      map: "Inch"         },
        'foot':       {ratio: foot_meter,           map: "Foot"         },
        'yard':       {ratio: foot_meter * 3,       map: "Yard"         },
        'fathom':     {ratio: foot_meter * 6,       map: "Fathom"       },
        'fur':        {ratio: foot_meter * 660,     map: "Fur"          },
        'mile':       {ratio: foot_meter * 5280,    map: "Mile"         },
        'nmile':      {ratio: 1852,                 map: "Nautical Mile"},
        'li':         {ratio: 500,                  map: "里"           },
        'zhang':      {ratio: 10 / 3,               map: "丈"           },
        'chi':        {ratio: 1 / 3,                map: "尺"           },
        'cun':        {ratio: 1 / 30,               map: "寸"           },
        'fen':        {ratio: 1 / 300,              map: "分"           },
        'lii':        {ratio: 1 / 3000,             map: "厘"           }
    },
    'mass': {
        'ton':        {ratio: 1000,                 map: "Ton"                                  },
        'kilogram':   {ratio: 1,                    map: "Kilogram"                             },
        'gram':       {ratio: 0.001,                map: "Gram"                                 },
        'milligram':  {ratio: 0.000001,             map: "MilliGram"                            },
        'dan':        {ratio: 50,                   map: "担"                                   },
        'jin':        {ratio: 0.5,                  map: "斤"                                   },
        'liang':      {ratio: 0.05,                 map: "两"                                   },
        'qian':       {ratio: 0.005,                map: "钱"                                   },
        'blton':      {ratio: kg_pound * 2240,      map: "British Long Ton"                     },
        'uston':      {ratio: kg_pound * 2000,      map: "US Short Ton"                         },
        'bcwt':       {ratio: kg_pound * 112,       map: "British Long Hundredweight (cwt)"     },
        'ucwt':       {ratio: kg_pound * 100,       map: "US Short Hundredweight (cwt)"         },
        'stone':      {ratio: kg_pound * 14,        map: "Stone"                                },
        'lb':         {ratio: kg_pound,             map: "Pound (lb)"                           },
        'oz':         {ratio: kg_pound / 16,        map: "Ounce (oz)"                           },
        'dram':       {ratio: kg_pound / 256,       map: "Dram (dr)"                            },
        'grain':      {ratio: tGrain_grain,         map: "Grain / Troy Grain"                   },
        'tpound':     {ratio: tGrain_grain * 5760,  map: "Troy Pound"                           },
        'tounce':     {ratio: tGrain_grain * 480,   map: "Troy Ounce"                           },
        'tdwt':       {ratio: tGrain_grain * 24,    map: "Troy Penny Weight"                    },
    }
}

export const getIds = (current) => {
    return Object.keys(unit_sets[current]) || null;
}
export const getDom = (current) => {
    const fields = getIds(current);
    if (! fields) {return}
    let content = ``
    fields.forEach(item => {
        const input =  `<div class="unit-item">
                            <label class="unit-label">${unit_sets[current][item]["map"] || item}</label>
                            <input class="unit-value" id="${item}" name="${item}" type="number" step="any"/>
                        </div>`
        content += input
    })
    content += `<div class="unit-item" style="text-align: center"><div id="clearAll" >Clear All</div></div>`
    return content
}
export const handler = (current, ids, e) => {
    const [value, id] = [e.target.value, e.target.id]
    if (value === '' || id === '') {return}
    if (current === 'temperature') {

    } else {
        const set = unit_sets[current]
        const curRatio = set[id] && set[id]["ratio"]
        // console.log(value, id)
        const sanitize = Number(value) * curRatio
        ids.forEach(id => {
            $(`#${id}`).val(sanitize / set[id]["ratio"])
        })
    }
}