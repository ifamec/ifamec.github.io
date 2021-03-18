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
    },
    'power': {
        'watt':  {ratio: 0.001,             map: "Watt (J/s, N·m/s)"    },
        'kwatt': {ratio: 1,                 map: "Kilowatt"             },
        'ih':    {ratio: 0.745712172,       map: "Imperial Horsepower"  },
        'mh':    {ratio: 0.7352941,         map: "Metric Horsepower"    },
        'kgms':  {ratio: 0.0098039215,      map: "kg·m/s"               },
        'kcals': {ratio: 4.1841004,         map: "kcal/s"               },
        'btu':   {ratio: 1.05507491,        map: "btu/s"                },
        'ftlbs': {ratio: 0.0013557483731,   map: "ft·lb/s"              }
    },
    'temperature': {
        'celsius':    {map: "Celsius"   },
        'fahrenheit': {map: "Fahrenheit"},
        'kelvin':     {map: "Kelvin"    },
        'rankine':    {map: "Rankine"   },
        'reaumur':    {map: "Reaumur"   }
    }
}
const handleTemperature = (value, id) => {
    let result = {}, errMsg
    switch (id) {
        case 'celsius':
            if(value < -273.15) {
                errMsg = 'Celsius Should >= -273.15'
            } else {
                result.celsius = value
                result.fahrenheit = 32 + (value * 9 / 5)
                result.kelvin = value + 273.15
                result.rankine = result.kelvin * 1.8
                result.reaumur = value / 1.25
            }
            break;
        case 'fahrenheit':
            if(value < -459.666666) {
                errMsg = 'Fahrenheit Should >= -459.67'
            } else {
                result.fahrenheit = value
                result.celsius = (value - 32) * 5 / 9
                result.kelvin = result.celsius + 273.15
                result.rankine = result.kelvin * 1.8
                result.reaumur = result.celsius / 1.25
            }
            break;
        case 'kelvin':
            if(value < 0) {
                errMsg = 'Kelvin Should >= 0'
            } else {
                result.kelvin = value
                result.celsius = value - 273.15
                result.fahrenheit = 32 + (result.celsius * 9 / 5)
                result.rankine = value * 1.8
                result.reaumur = result.celsius / 1.25
            }
            break;
        case 'rankine':
            if(value < 0) {
                errMsg = 'Rankine Should >= 0'
            } else {
                result.rankine = value
                result.kelvin = value / 1.8
                result.celsius = result.kelvin - 273.15
                result.fahrenheit = 32 + (result.celsius * 9 / 5)
                result.reaumur = result.celsius / 1.25
            }
            break;
        case 'reaumur':
            if(value < -218.5199999999) {
                errMsg = 'Rankine Should >= -218.5199999999'
            } else {
                result.reaumur = value
                result.celsius = value * 1.25
                result.kelvin = result.celsius + 273.15
                result.fahrenheit = 32 + (result.celsius * 9 / 5)
                result.rankine = result.kelvin * 1.8
            }
            break;
    }
    if (errMsg) {
        alert(`Error: ${errMsg}, Please Retry.\nDo you want clear all fields?`)
        $('#clearAll').trigger('click')
    } else {
        $(`#celsius`).val(result.celsius)
        $(`#fahrenheit`).val(result.fahrenheit)
        $(`#kelvin`).val(result.kelvin)
        $(`#rankine`).val(result.rankine)
        $(`#reaumur`).val(result.reaumur)
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
        handleTemperature(Number(value), id)
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