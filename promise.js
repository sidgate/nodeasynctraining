const fs = require('fs')

const util = require('util')

const fsp = require('fs').promises

//fsp.readFile()

//let readFilePromise = util.promisify(fs.readFile)

let promise = new Promise(function(resolve,reject){
    fs.readFile('temp.txt','utf-8', function(err, content){
        if(err) return reject(err);
        return resolve(content);
    })
})

let x = promise.then(function(content){
    console.log("then" +content)
    return content + "\nwww.google.com"
})

x.then(function(result){
    console.log("new reuslt ")
    console.log(result)
})