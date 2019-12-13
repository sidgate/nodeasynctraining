const utilFn = require('./util-fn');
const util = require('util')
const r = require('request');
const fs = require('fs')
const rp= require('request-promise')


// TODO functions, lambda

function print(){
    console.log('hello')
}

let print2 = ()=> console.log('hello2')

let print3 = function(){
    console.log('hello3')
}

function Person(name){
this.name = name

this.getName = function(){
    return this.name;
}
}




class Person2 {
    constructor(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }
}
// TODO function as parameter

function add(a,b) { return a+b}

function subs(a,b) {return a-b}

function calculator(a,b, op ){
    return op(a,b)
}

//console.log(calculator(20,10,subs))

// TODO setTimeout 
function readFile(filename){
    
    let callback = function(){
        console.log(filename)
        utilFn.longRunningFn(3000)
        console.log('done '+ filename)
    }

    setTimeout(callback)
    
}
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
fs.readFile('temp.txt','utf-8', function(err, content){
    let urls = content.split('\n');
    r.get(urls[0],res(urls));
});

// fs.readFile('temp.txt','utf-8', function(err, content){
//     let urls = content.split('\n');

//     r.get(urls[0], function(err, response){
//         let body = JSON.parse(response.body)
//         console.log(body.CurrValue)
//         if(true){
//             r.get(urls[1], function(err2, response2){
//                 let body = JSON.parse(response2.body)
//                 console.log(body.CurrValue)
//             });
//         }
//     });

// });

var promise=new Promise(function(resolve,reject){
    fs.readFile('temp.txt','utf-8', function(err, content){
        if(err){
            reject(err)
            return;
        }
        resolve(content);
    });
});


var promiseReadFile= util.promisify(fs.readFile)

promiseReadFile('temp.txt','utf-8').then((content)=>{
   urls=content.split('\n');
let promises={}
let promise1= rp.get(urls[0])
let promise2= rp.get(urls[2])
promise.push(promise1)
promise.push(promise2)

var allpromises=Promise.all(promises)
allpromises.then((result)=>{
    let out=""
    for(i=0;i<result.length;i++){
        out +=JSON.parse(result[i]).CurrValue
    }
    console.log(out)
})
})
//   let promises= urls.map(function(url){
// return rp.get(url)
//    }).map(function(promise){
//        return promise.then((body)=>{
//            JSON.parse(body).CurrValue

//        })
//    })
//    Promise.all(promises).then((val1, val2)=>{
//        console.log(arr[0]+" "+arr[1])
//    })
// })


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




// console.log('end')


// TODO closure
// TODO File handling
// TODO Http request
// TODO callback hell
// TODO Promise
// TODO Resolve/Reject
// TODO then/catch
// TODO all
// TODO Promisify
// TODO async await
// TODO Event loop
// TODO Event listener


