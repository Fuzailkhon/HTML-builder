const path = require('path')
const fs = require('fs')

const distPath = path.join(__dirname, 'project-dist')
const componentsPath = path.join(__dirname, 'components')
const templateFilePath = path.join(__dirname, 'template.html')

fs.access(distPath, (err) => {
    if (!err) {
        fs.mkdir(distPath, err => {
            if (err) throw err;
        })
    }
})

// fs.writeFile(path.join(distPath, 'index.html', (err) => {
//     if (err) throw err
// }))

// fs.writeFile(path.join(distPath, 'style.css', (err) => {
//     if (err) throw err
// }))

fs.readFile(
    templateFilePath,
    'utf-8',
    (err, data) => {
        let matches = data.matchAll(/\{{(.*?)\}}/g)
        let file = data
        matches = Array.from(matches)
        matches.forEach((match) => {
            const compName = match[1]
            fs.readFile(
                path.join(componentsPath, compName + '.html'),
                'utf-8',
                async (err, component) => {
                    file = await file.replace(match[0], component)
                }
            )
        })
        console.log(file)
    }
)