const fs = require('fs')
console.log('시작......')


fs.readFile('./news.txt', (err, data) => {
    if (err) {
        console.log('Error....')
    }
    console.log(data.toString())
})