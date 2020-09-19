// Iterate and collect all md file in ./post/2020/src, generate json file for future render
import fs from 'fs'
import path from 'path'

const dirname = path.resolve()
const postPath = `${dirname}/post/2020/src/`

const file = fs.readdirSync(postPath)
const meta = {
    filename: file.filter( (i) => /\bmd$/i.test(i) )
}

fs.writeFileSync(`${dirname}/post/2020/meta.json`, JSON.stringify(meta));
