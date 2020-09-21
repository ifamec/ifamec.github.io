// Iterate and collect all md file in ./post/2020/src, generate json file for future render
import fs from 'fs'
import path from 'path'

const dirname = path.resolve()
const postPath = `${dirname}/post/2020/src/`

const meta = {}
const getFileBirthtime = (path) => {
  const stats = fs.statSync(path)
  return stats.birthtime
}
const file = fs.readdirSync(postPath)
let validFile = file.filter((i) => /\bmd$/i.test(i) && i !== '404.md')
if (validFile.length) {
    meta.fileStat = validFile.map(fn => {
        return {
            fileName: fn.replace('.md', ''),
            birthtime: getFileBirthtime(`${postPath}${fn}`)
        }
    }).sort((o1, o2) => {
        return new Date(o2.birthtime) - new Date(o1.birthtime)
    })
}

fs.writeFileSync(`${dirname}/post/2020/meta.json`, JSON.stringify(meta));
