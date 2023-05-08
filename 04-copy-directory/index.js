const path = require('path')
const fs = require('fs')

const source = path.join(__dirname, 'files') 
const dest = path.join(__dirname, 'files-copy')

fs.mkdir(dest, err => {
    if (err) throw err;
    console.log('Папка была создана');
})

fs.readdir(source, (err, files) => {
    files.forEach((file, index) => {
        const filePath = path.join(source, file)
        const destPath = path.join(dest, file)
        fs.copyFile(filePath, destPath, (err) => {
            if (err) throw err
        })
    })
})