const path = require('path')
const fs = require('fs')

const allStylesPath = path.join(__dirname, 'styles')
const bundlePath = path.join(__dirname, 'project-dist')

fs.readdir(allStylesPath, (err, files) => {
    files.forEach((file, index) => {
        const filePath = path.join(allStylesPath, file)
        fs.stat(filePath, (err, stat) => {
            if (stat.isFile() && path.extname(filePath) == '.css') {
                fs.readFile(
                    filePath,
                    'utf-8',
                    (err, data) => {
                        if (err) throw err;
                        fs.appendFile(
                            path.join(bundlePath, 'bundle.css'),
                            data,
                            err => {
                                if (err) throw err;
                                console.log('file is added')
                            }
                        )
                    }
                )
            }
        })
    })
})