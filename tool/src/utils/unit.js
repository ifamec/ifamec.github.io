// const foot_meter = 1 / 3.2808
// const kg_pound = 0.45359237
// const tGrain_grain = 0.45359237 / 7000
// const cubicInch = 0.016387064
// const uk_gallon = 4.54609
// const unit_sets = {
//     'area': {
//         'skm':  {ratio: 1000000,                                map: "Square Kilometer (km2)" },
//         'ha':   {ratio: 10000,                                  map: "Hectare (ha)"           },
//         'sq':   {ratio: 1,                                      map: "Square Meter (m2)"      },
//         'are':  {ratio: 10000 / 15,                             map: "Are"                    },
//         'sdm':  {ratio: 0.01,                                   map: "Square Decimeter (dm2)" },
//         'scm':  {ratio: 0.0001,                                 map: "Square Centimeter (cm2)"},
//         'smm':  {ratio: 0.000001,                               map: "Square Millimeter (mm2)"},
//         'sf':   {ratio: 0.3048 * 0.3048,                        map: "Square Foot (sq ft)"    },
//         'sy':   {ratio: 0.3048 * 0.3048 * 9,                    map: "Square Yard (sq yd)"    },
//         'sr':   {ratio: 0.3048 * 0.3048 * 16.5 * 16.5,          map: "Square Rod (sq rd)"     },
//         'acre': {ratio: 160 * 0.3048 * 0.3048 * 16.5 * 16.5,    map: "Acre"                   },
//         'sm':   {ratio: 0.3048 * 0.3048 * 5280 * 5280,          map: "Square Mile (sq mi)"    },
//         'si':   {ratio: 0.3048 * 0.3048 / 144,                  map: "Square Inch (sq in)"    }
//     },
//     'length': {
//         'kilometer':  {ratio: 1000,                 map: "Kilometer"    },
//         'meter':      {ratio: 1,                    map: "Meter"        },
//         'decimeter':  {ratio: 0.1,                  map: "Decimeter"    },
//         'centimeter': {ratio: 0.01,                 map: "Centimeter"   },
//         'millimeter': {ratio: 0.001,                map: "Millimeter"   },
//         'micrometer': {ratio: 0.000001,             map: "Micrometer"   },
//         'inch':       {ratio: foot_meter / 12,      map: "Inch"         },
//         'foot':       {ratio: foot_meter,           map: "Foot"         },
//         'yard':       {ratio: foot_meter * 3,       map: "Yard"         },
//         'fathom':     {ratio: foot_meter * 6,       map: "Fathom"       },
//         'fur':        {ratio: foot_meter * 660,     map: "Fur"          },
//         'mile':       {ratio: foot_meter * 5280,    map: "Mile"         },
//         'nmile':      {ratio: 1852,                 map: "Nautical Mile"},
//         'li':         {ratio: 500,                  map: "里"           },
//         'zhang':      {ratio: 10 / 3,               map: "丈"           },
//         'chi':        {ratio: 1 / 3,                map: "尺"           },
//         'cun':        {ratio: 1 / 30,               map: "寸"           },
//         'fen':        {ratio: 1 / 300,              map: "分"           },
//         'lii':        {ratio: 1 / 3000,             map: "厘"           }
//     },
//     'mass': {
//         'ton':        {ratio: 1000,                 map: "Ton"                                  },
//         'kilogram':   {ratio: 1,                    map: "Kilogram"                             },
//         'gram':       {ratio: 0.001,                map: "Gram"                                 },
//         'milligram':  {ratio: 0.000001,             map: "MilliGram"                            },
//         'dan':        {ratio: 50,                   map: "担"                                   },
//         'jin':        {ratio: 0.5,                  map: "斤"                                   },
//         'liang':      {ratio: 0.05,                 map: "两"                                   },
//         'qian':       {ratio: 0.005,                map: "钱"                                   },
//         'blton':      {ratio: kg_pound * 2240,      map: "British Long Ton"                     },
//         'uston':      {ratio: kg_pound * 2000,      map: "US Short Ton"                         },
//         'bcwt':       {ratio: kg_pound * 112,       map: "British Long Hundredweight (cwt)"     },
//         'ucwt':       {ratio: kg_pound * 100,       map: "US Short Hundredweight (cwt)"         },
//         'stone':      {ratio: kg_pound * 14,        map: "Stone"                                },
//         'lb':         {ratio: kg_pound,             map: "Pound (lb)"                           },
//         'oz':         {ratio: kg_pound / 16,        map: "Ounce (oz)"                           },
//         'dram':       {ratio: kg_pound / 256,       map: "Dram (dr)"                            },
//         'grain':      {ratio: tGrain_grain,         map: "Grain / Troy Grain"                   },
//         'tpound':     {ratio: tGrain_grain * 5760,  map: "Troy Pound"                           },
//         'tounce':     {ratio: tGrain_grain * 480,   map: "Troy Ounce"                           },
//         'tdwt':       {ratio: tGrain_grain * 24,    map: "Troy Penny Weight"                    },
//     },
//     'power': {
//         'watt':  {ratio: 0.001,             map: "Watt (J/s, N·m/s)"    },
//         'kwatt': {ratio: 1,                 map: "Kilowatt"             },
//         'ih':    {ratio: 0.745712172,       map: "Imperial Horsepower"  },
//         'mh':    {ratio: 0.7352941,         map: "Metric Horsepower"    },
//         'kgms':  {ratio: 0.0098039215,      map: "kg·m/s"               },
//         'kcals': {ratio: 4.1841004,         map: "kcal/s"               },
//         'btu':   {ratio: 1.05507491,        map: "btu/s"                },
//         'ftlbs': {ratio: 0.0013557483731,   map: "ft·lb/s"              }
//     },
//     'pressure': {
//         'atm':    {ratio: 101325,               map: "Standard atmosphere"                      },
//         'bar':    {ratio: 100000,               map: "Bar (bar)"                                },
//         'mbar':   {ratio: 100000,               map: "Millibar (mbar)"                          },
//         'kpa':    {ratio: 1000,                 map: "Kilopascal (kPa)"                         },
//         'hpa':    {ratio: 100,                  map: "Hectopascal (hPa)"                        },
//         'pa':     {ratio: 1,                    map: "Pascal (Pa, N/m2)"                        },
//         'mmhg':   {ratio: 101325 / 760,         map: "Millimeter of mercury (mmHg)"             },
//         'inhg':   {ratio: 25.4 * 101325 / 760,  map: "Inch of mercury (inHg)"                   },
//         'psqf':   {ratio: 6894.757 / 144,       map: "Pound / Square Feet (lbf/ft2)"            },
//         'psqi':   {ratio: 6894.757,             map: "Pound / Square Inch (lbf/in2)"            },
//         'kgsqm':  {ratio: 9.80665,              map: "Kilogram / Square Meter (kgf/m2)"         },
//         'kgsqcm': {ratio: 98066.5,              map: "Kilogram / Square Centimeter (kgf/cm2)"   },
//         'mmh2o':  {ratio: 1 / 0.101972,         map: "Millimeter of water (mmH2O)"              }
//     },
//     'speed': {
//         'mach':  {ratio: 340.29,            map: "Mach (M)"                 },
//         'mps':   {ratio: 1,                 map: "Meter per second (m/s)"   },
//         'knots': {ratio: 1/1.9438444924,    map: "Knots (kts)"              },
//         'mph':   {ratio: 1/2.23694,         map: "Mile per Hour (mph)"      },
//         'kph':   {ratio: 1/3.6,             map: "Kilometer per Hour (kph)" },
//     },
//     'volume': {
//         'm3':          {ratio: 1000,                            map: "Cubic meter (m3)"                       },
//         'hl':          {ratio: 1000,                            map: "Hectoliter (hl)"                        },
//         'dal':         {ratio: 1000,                            map: "Decaliter (dal)"                        },
//         'l':           {ratio: 1,                               map: "Liter (l), Cubic decimeter (dm3)"       },
//         'dl':          {ratio: 0.1,                             map: "Deciliter (dl)"                         },
//         'cl':          {ratio: 0.01,                            map: "Centiliter (cl)"                        },
//         'ml':          {ratio: 0.001,                           map: "Milliliter (ml), Cubic centimeter (cm3)"},
//         'mml':         {ratio: 0.000001,                        map: "Cubic millimeter (mm3)"                 },
//         'tables':      {ratio: 0.015,                           map: "Table Spoon"                            },
//         'teas':        {ratio: 0.005,                           map: "Tea Spoon"                              },
//         'usc_afoot':   {ratio: 43560 * 1728 * cubicInch,        map: "Cubic Acer Foot"                        },
//         'usc_yard':    {ratio: 27 * 1728 * cubicInch,           map: "Cubic Yard"                             },
//         'usc_foot':    {ratio: 1728 * cubicInch,                map: "Cubic Foot"                             },
//         'usc_inch':    {ratio: cubicInch,                       map: "Cubic Inch"                             },
//         'usl_barrel':  {ratio: 42 * 231 * cubicInch,            map: "US F Barrel (42 Gallon)"                },
//         'usl_gallon':  {ratio: 231 * cubicInch,                 map: "US F Gallon"                            },
//         'usl_quart':   {ratio: 231 * cubicInch / 4,             map: "US F Quart (qt)"                        },
//         'usl_pint':    {ratio: 231 * cubicInch / 8,             map: "US F Pint (pt)"                         },
//         'usl_gill':    {ratio: 231 * cubicInch / 32,            map: "US F Gill (gi)"                         },
//         'usl_fl_oz':   {ratio: 231 * cubicInch / 128,           map: "US Fluid Ounce (fl oz)"                 },
//         'usl_fl_dram': {ratio: 231 * cubicInch / 1024,          map: "US Fluid Dram (dr)"                     },
//         'usl_minim':   {ratio: 231 * cubicInch / 128 / 61440,   map: "US F Minim (min)"                       },
//         'us_cup':      {ratio: 231 * cubicInch / 16,            map: "US Cup"                                 },
//         'us_tables':   {ratio: 231 * cubicInch / 256,           map: "US Table Spoon"                         },
//         'us_teas':     {ratio: 231 * cubicInch / 768,           map: "US Tea Spoon"                           },
//         'usd_barrel':  {ratio: 7056 * cubicInch,                map: "US Barrel"                              },
//         'usd_bushel':  {ratio: 2150.42 * cubicInch,             map: "US Bushel (bu)"                         },
//         'usd_peck':    {ratio: 2150.42 * cubicInch / 4,         map: "US Peck (pk)"                           },
//         'usd_quart':   {ratio: 2150.42 * cubicInch / 32,        map: "US Quart (qt)"                          },
//         'usd_pint':    {ratio: 2150.42 * cubicInch / 64,        map: "US Pint (pt)"                           },
//         'uk_barrel':   {ratio: 36 * uk_gallon,                  map: "UK Barrel"                              },
//         'uk_bushel':   {ratio: 8 * uk_gallon,                   map: "UK Bushel"                              },
//         'uk_gallon':   {ratio: uk_gallon,                       map: "UK Gallon (gal)"                        },
//         'uk_pint':     {ratio: uk_gallon / 8,                   map: "UK Pint (pt)"                           },
//         'uk_fl_oz':    {ratio: uk_gallon / 160,                 map: "UK Fluid Ounce (fl oz)"                 }
//     },
//
//     'temperature': {
//         'celsius':    {map: "Celsius"   },
//         'fahrenheit': {map: "Fahrenheit"},
//         'kelvin':     {map: "Kelvin"    },
//         'rankine':    {map: "Rankine"   },
//         'reaumur':    {map: "Reaumur"   }
//     }
// }
const unit_sets = JSON.parse(`{"area":{"skm":{"ratio":1000000,"map":"Square Kilometer (km2)"},"ha":{"ratio":10000,"map":"Hectare (ha)"},"sq":{"ratio":1,"map":"Square Meter (m2)"},"are":{"ratio":666.6666666666666,"map":"Are"},"sdm":{"ratio":0.01,"map":"Square Decimeter (dm2)"},"scm":{"ratio":0.0001,"map":"Square Centimeter (cm2)"},"smm":{"ratio":0.000001,"map":"Square Millimeter (mm2)"},"sf":{"ratio":0.09290304,"map":"Square Foot (sq ft)"},"sy":{"ratio":0.8361273600000001,"map":"Square Yard (sq yd)"},"sr":{"ratio":25.29285264,"map":"Square Rod (sq rd)"},"acre":{"ratio":4046.8564224,"map":"Acre"},"sm":{"ratio":2589988.110336,"map":"Square Mile (sq mi)"},"si":{"ratio":0.0006451600000000001,"map":"Square Inch (sq in)"}},"length":{"kilometer":{"ratio":1000,"map":"Kilometer"},"meter":{"ratio":1,"map":"Meter"},"decimeter":{"ratio":0.1,"map":"Decimeter"},"centimeter":{"ratio":0.01,"map":"Centimeter"},"millimeter":{"ratio":0.001,"map":"Millimeter"},"micrometer":{"ratio":0.000001,"map":"Micrometer"},"inch":{"ratio":0.025400308867755832,"map":"Inch"},"foot":{"ratio":0.30480370641307,"map":"Foot"},"yard":{"ratio":0.9144111192392099,"map":"Yard"},"fathom":{"ratio":1.8288222384784198,"map":"Fathom"},"fur":{"ratio":201.17044623262618,"map":"Fur"},"mile":{"ratio":1609.3635698610094,"map":"Mile"},"nmile":{"ratio":1852,"map":"Nautical Mile"},"li":{"ratio":500,"map":"里"},"zhang":{"ratio":3.3333333333333335,"map":"丈"},"chi":{"ratio":0.3333333333333333,"map":"尺"},"cun":{"ratio":0.03333333333333333,"map":"寸"},"fen":{"ratio":0.0033333333333333335,"map":"分"},"lii":{"ratio":0.0003333333333333333,"map":"厘"}},"mass":{"ton":{"ratio":1000,"map":"Ton"},"kilogram":{"ratio":1,"map":"Kilogram"},"gram":{"ratio":0.001,"map":"Gram"},"milligram":{"ratio":0.000001,"map":"MilliGram"},"dan":{"ratio":50,"map":"担"},"jin":{"ratio":0.5,"map":"斤"},"liang":{"ratio":0.05,"map":"两"},"qian":{"ratio":0.005,"map":"钱"},"blton":{"ratio":1016.0469088000001,"map":"British Long Ton"},"uston":{"ratio":907.18474,"map":"US Short Ton"},"bcwt":{"ratio":50.80234544,"map":"British Long Hundredweight (cwt)"},"ucwt":{"ratio":45.359237,"map":"US Short Hundredweight (cwt)"},"stone":{"ratio":6.35029318,"map":"Stone"},"lb":{"ratio":0.45359237,"map":"Pound (lb)"},"oz":{"ratio":0.028349523125,"map":"Ounce (oz)"},"dram":{"ratio":0.0017718451953125,"map":"Dram (dr)"},"grain":{"ratio":0.00006479891000000001,"map":"Grain / Troy Grain"},"tpound":{"ratio":0.3732417216,"map":"Troy Pound"},"tounce":{"ratio":0.031103476800000005,"map":"Troy Ounce"},"tdwt":{"ratio":0.00155517384,"map":"Troy Penny Weight"}},"power":{"watt":{"ratio":0.001,"map":"Watt (J/s, N·m/s)"},"kwatt":{"ratio":1,"map":"Kilowatt"},"ih":{"ratio":0.745712172,"map":"Imperial Horsepower"},"mh":{"ratio":0.7352941,"map":"Metric Horsepower"},"kgms":{"ratio":0.0098039215,"map":"kg·m/s"},"kcals":{"ratio":4.1841004,"map":"kcal/s"},"btu":{"ratio":1.05507491,"map":"btu/s"},"ftlbs":{"ratio":0.0013557483731,"map":"ft·lb/s"}},"pressure":{"atm":{"ratio":101325,"map":"Standard atmosphere"},"bar":{"ratio":100000,"map":"Bar (bar)"},"mbar":{"ratio":100000,"map":"Millibar (mbar)"},"kpa":{"ratio":1000,"map":"Kilopascal (kPa)"},"hpa":{"ratio":100,"map":"Hectopascal (hPa)"},"pa":{"ratio":1,"map":"Pascal (Pa, N/m2)"},"mmhg":{"ratio":133.32236842105263,"map":"Millimeter of mercury (mmHg)"},"inhg":{"ratio":3386.3881578947367,"map":"Inch of mercury (inHg)"},"psqf":{"ratio":47.88025694444444,"map":"Pound / Square Feet (lbf/ft2)"},"psqi":{"ratio":6894.757,"map":"Pound / Square Inch (lbf/in2)"},"kgsqm":{"ratio":9.80665,"map":"Kilogram / Square Meter (kgf/m2)"},"kgsqcm":{"ratio":98066.5,"map":"Kilogram / Square Centimeter (kgf/cm2)"},"mmh2o":{"ratio":9.806613580198487,"map":"Millimeter of water (mmH2O)"}},"speed":{"mach":{"ratio":340.29,"map":"Mach (M)"},"mps":{"ratio":1,"map":"Meter per second (m/s)"},"knots":{"ratio":0.5144444444551907,"map":"Knots (kts)"},"mph":{"ratio":0.4470392589877243,"map":"Mile per Hour (mph)"},"kph":{"ratio":0.2777777777777778,"map":"Kilometer per Hour (kph)"}},"volume":{"m3":{"ratio":1000,"map":"Cubic meter (m3)"},"hl":{"ratio":1000,"map":"Hectoliter (hl)"},"dal":{"ratio":1000,"map":"Decaliter (dal)"},"l":{"ratio":1,"map":"Liter (l), Cubic decimeter (dm3)"},"dl":{"ratio":0.1,"map":"Deciliter (dl)"},"cl":{"ratio":0.01,"map":"Centiliter (cl)"},"ml":{"ratio":0.001,"map":"Milliliter (ml), Cubic centimeter (cm3)"},"mml":{"ratio":0.000001,"map":"Cubic millimeter (mm3)"},"tables":{"ratio":0.015,"map":"Table Spoon"},"teas":{"ratio":0.005,"map":"Tea Spoon"},"usc_afoot":{"ratio":1233481.83754752,"map":"Cubic Acer Foot"},"usc_yard":{"ratio":764.554857984,"map":"Cubic Yard"},"usc_foot":{"ratio":28.316846592,"map":"Cubic Foot"},"usc_inch":{"ratio":0.016387064,"map":"Cubic Inch"},"usl_barrel":{"ratio":158.987294928,"map":"US F Barrel (42 Gallon)"},"usl_gallon":{"ratio":3.785411784,"map":"US F Gallon"},"usl_quart":{"ratio":0.946352946,"map":"US F Quart (qt)"},"usl_pint":{"ratio":0.473176473,"map":"US F Pint (pt)"},"usl_gill":{"ratio":0.11829411825,"map":"US F Gill (gi)"},"usl_fl_oz":{"ratio":0.0295735295625,"map":"US Fluid Ounce (fl oz)"},"usl_fl_dram":{"ratio":0.0036966911953125,"map":"US Fluid Dram (dr)"},"usl_minim":{"ratio":4.813399993896484e-7,"map":"US F Minim (min)"},"us_cup":{"ratio":0.2365882365,"map":"US Cup"},"us_tables":{"ratio":0.01478676478125,"map":"US Table Spoon"},"us_teas":{"ratio":0.00492892159375,"map":"US Tea Spoon"},"usd_barrel":{"ratio":115.627123584,"map":"US Barrel"},"usd_bushel":{"ratio":35.23907016688,"map":"US Bushel (bu)"},"usd_peck":{"ratio":8.80976754172,"map":"US Peck (pk)"},"usd_quart":{"ratio":1.101220942715,"map":"US Quart (qt)"},"usd_pint":{"ratio":0.5506104713575,"map":"US Pint (pt)"},"uk_barrel":{"ratio":163.65924,"map":"UK Barrel"},"uk_bushel":{"ratio":36.36872,"map":"UK Bushel"},"uk_gallon":{"ratio":4.54609,"map":"UK Gallon (gal)"},"uk_pint":{"ratio":0.56826125,"map":"UK Pint (pt)"},"uk_fl_oz":{"ratio":0.028413062500000003,"map":"UK Fluid Ounce (fl oz)"}},"temperature":{"celsius":{"map":"Celsius"},"fahrenheit":{"map":"Fahrenheit"},"kelvin":{"map":"Kelvin"},"rankine":{"map":"Rankine"},"reaumur":{"map":"Reaumur"}}}`)
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
                            <input class="unit-value" id="${item}" name="${item}" type="number" step="any"/>
                            <label class="unit-label">${unit_sets[current][item]["map"] || item}</label>
                        </div>`
        content += input
    })
    content += `<div class="unit-item"><div id="clearAll" style="text-align: center">Clear All</div></div>`
    return content
}
export const handler = (current, ids, e) => {
    const [value, id] = [e.target.value, e.target.id]
    if (value.trim() === '' || isNaN(value) || id === '') {return}
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
export const lengthCombination = () => {
    const content = `<hr/>
        <form id="unit-c-content">
            <div class="unit-item">
                <input class="unit-c-value" id="lft" name="Ft" type="number" step="any"/>
                <label class="unit-c-label">Ft</label>
                <input class="unit-c-value" id="lin" name="In" type="number" step="any"/>
                <label class="unit-c-label">In</label>
            </div>
            <div class="unit-item">
                <input class="unit-value" id="lcm" name="CM" type="number" step="any"/>
                <label class="unit-label">CM</label>
            </div>
            <div class="unit-item">
                <input class="unit-value" id="lfeet" name="Feet" type="number" step="any"/>
                <label class="unit-label">Feet</label>
            </div>
            <div class="unit-item">
                <input class="unit-value" id="linches" name="Inches" type="number" step="any"/>
                <label class="unit-label">Inches</label>
            </div>
            <div class="unit-item"><div id="clear" style="text-align: center">Clear</div></div>
        </form>`
    $(content).appendTo($('#content'))
}