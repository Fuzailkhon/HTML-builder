const path = require('path');
const fs = require('fs')

let absolutePath = path.join(__dirname, 'secret-folder')

fs.readdir(absolutePath, (err, files) => {
    files.forEach((file, index) => {
        let absoluteFilePath = path.join(absolutePath, file)
        fs.stat(absoluteFilePath, (err, stat) => {
            if (stat.isFile()) {
                console.log(`${path.basename(absoluteFilePath).split('.')[0]} - ${path.extname(absoluteFilePath)} - ${stat.size / 1000}kb`)
            }
        })
    })
})

