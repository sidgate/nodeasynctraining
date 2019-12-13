const fs = require('fs')

console.log('start')
fs.readFile('temp.txt', 'utf-8', function(err, content){
    console.log(content)
})

console.log('after file')


console.log('end')

//start
//after file
//end
//content
//settimeout