const foot_meter = 1 / 3.2808
export const unit_length = {
    relation: {
        'kilometre':  1000,
        'meter':      1,
        'decimeter':  0.1,
        'centimeter': 0.01,
        'millimeter': 0.001,
        'micrometer': 0.000001,
        'inch':       foot_meter / 12,
        'foot':       foot_meter,
        'yard':       foot_meter * 3,
        'fathom':     foot_meter * 6,
        'fur':        foot_meter * 660,
        'mile':       foot_meter * 5280,
        'nmile':      1852,
        'li':         500,
        'zhang':      10 / 3,
        'chi':        1 / 3,
        'cun':        1 / 30,
        'fen':        1 / 300,
        'lii':        1 / 3000
    },
    mapping:  {
        'li':    "里",
        'zhang': "丈",
        'chi':   "尺",
        'cun':   "寸",
        'fen':   "分",
        'lii':   "厘",
        'nmile': "nautical mile"
    }
}