// Iterate and collect all md file in ./post/2020/src, generate json file for future render
import fs from 'fs'
import path from 'path'

const dirname = path.resolve()
const postPath = `${dirname}/post/src/`

const meta = {}
const getFileBirthtime = (path) => {
	const md = fs.readFileSync(path, 'utf8')
	const lines = md.split('\n').filter(l => /^createDate:\s*\d{4}-\d{2}-\d{2}$/i.test(l))
	if (lines.length) {
		return lines[0].match(/^createDate:(.*)/i)[1].trim()
	} else {
		throw new Error(`createDate not found / format not correct in ${path}`)
	}
}
const file = fs.readdirSync(postPath)
let validFile = file.filter((i) => /\bmd$/i.test(i) && i !== '404.md')
if (validFile.length) {
	meta.fileStat = validFile.map(fn => {
		return {
			fileName:  fn.replace('.md', '').replace(/_/g, ' '),
			birthtime: getFileBirthtime(`${postPath}${fn}`)
		}
	}).sort((o1, o2) => {
		return new Date(o2.birthtime) - new Date(o1.birthtime)
	})
}

fs.writeFileSync(`${dirname}/post/meta.json`, JSON.stringify(meta));
