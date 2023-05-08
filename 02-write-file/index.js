const fs = require('fs')
const path = require('path')
const { stdin, stdout } = process

stdout.write('Hi there\n')

process.on('SIGINT', () => {
    process.exit()
})

process.on('exit', () => {
    stdout.write('Bye bye, Good luck learning Node JS\n')
})

function writeToFile(text){
    if(text == 'exit'){
        exit = true
    }

    fs.appendFile(
        path.join(__dirname, "text.txt"),
        text,
        err => {
            if (err) throw err;
            stdout.write('Please enter some text:\n')
        }
    )
}

stdout.write('Please enter some text: \n')
stdin.on('data', (data) => {
    if(data == "exit"){
        process.exit()
    }
    writeToFile(data)
})