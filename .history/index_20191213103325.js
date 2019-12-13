const utilFn = require('./util-fn');
const util = require('util')
const r = require('request');
const fs = require('fs')
const rp=require('request-promise');

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

console.log('start')
//var urls;
    var promise=new Promise(function(resolve,reject){
    fs.readFile('temp.txt','utf-8', function(err, content){
        if(err){
            reject(err);
            return;
        }

        //urls = content.split('\n');
        //r.get(urls[0],json(urls));
        resolve(content);

        });
    });

promise.then((content)=>{
    content.log(content)
})
// let json=function(urls){
//   return  function(err, response){
//         let body = JSON.parse(response.body)
//         console.log(body.CurrValue)
//         if(true){
//             r.get(urls[0], function(err2, response2){
//                 let body = JSON.parse(response2.body)
//                 console.log(body.CurrValue)
//             });
//         }
//     }
// }

console.log('end')
var promiseReadFile=util.promisify(fs.readFile)
promiseReadFile('temp.txt','utf-8').then((content)=>{
    urls=content.split('\n');
    let promises=urls.map(function(url)
    {
        return rp.get(url)
    }).forEach(function(promise)
    {
        promise.then((body)=>{
            JSON.parse(body).CurrValue
        })
    })
        promise.all(promises).then((val1,val2)=>{
            console.log(val1+val2)
        })
})

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