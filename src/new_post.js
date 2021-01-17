import path from "path";
import fs from "fs";

const args = process.argv
const dirname = path.resolve()
const postPath = `${dirname}/post/src/`

const getBirthtime = () => {
    const date = new Date();
    return new Date(date.getTime() - (date.getTimezoneOffset() * 60000 ))
        .toISOString()
        .split("T")[0];
}

if (args.length > 2) {
    const title = args.slice(2,)
    title.forEach(postTitle => {
        if (/[^\w]/.test(postTitle)) {
            console.log(`${postTitle} file creation fails, please only use following characters in filename:\n number, uppercase and lowercase letter, '_'(underscore).`)
        } else {
            const postHead = `# ${postTitle}\ncreateDate:${getBirthtime()}`
            fs.writeFileSync(`${postPath}${postTitle}.md`, postHead);
        }
    })
} else {
    console.log('please provide a file name')
}