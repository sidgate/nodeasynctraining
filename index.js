const utilFn = require('./util-fn');
const util = require('util')
const r = require('request');
const fs = require('fs')
const rp = require('request-promise');


fs.readFile('temp.txt','utf-8', function(err, content){
    let urls = content.split('\n');
    r.get(urls[0],res(urls));
});

//Task2
const res = function(urls){
    return function(err, response){
        let body = JSON.parse(response.body)
        console.log(body.CurrValue)
        if(true){
            r.get(urls[1], function(err2, response2){
                let body = JSON.parse(response2.body)
                console.log(body.CurrValue)
            });
        }
    }
}

console.log('start')

//Task1
var promise = new Promise(function(resolve,reject){
    fs.readFile('temp.txt','utf-8', function(err, content){
        if(true)
        {
            resolve(content)
        }
        else
        {
            reject(err);
        }
    });
});
promise.then((content)=>{
    console.log(content);
    let urls = content.split('\n');
    r.get(urls[0],res(urls));
})


//assignment ====>
var body;
var promisReadfile = util.promisify(fs.readFile)

promisReadfile('temp.txt','utf-8').then((content)=>{
    urls = content.split('\n');

    var jeson1 = rp.get(urls[0]);
    var jeson2 = rp.get(urls[1]);

     Promise.all([jeson1,jeson2]).then((response)=>{
        response.forEach(data => {
            body = JSON.parse(data);
            console.log("final ans =>"+body.CurrValue);
        })
     })
})

console.log('end')





