const utilFn = require('./util-fn');
const util = require('util')
const r = require('request');
const fs = require('fs')
const rp = require('request-promise')
const fsp = require('fs').promises


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

fs.readFile('temp.txt','utf-8', function(err, content){
    let urls = content.split('\n');

    r.get(urls[0], function(err, response){
        let body = JSON.parse(response.body)
        console.log(body.CurrValue)
        if(true){
            r.get(urls[1], function(err2, response2){
                let body = JSON.parse(response2.body)
                console.log(body.CurrValue)
            });
        }
    });

});
// fs.readFile('temp.txt','utf-8', function(err, content){
//      urls = content.split('\n');
//     var body;
//     r.get(urls[0],function(err, response){
//         body = JSON.parse(response.body)
//         console.log(body.CurrValue)
        
//     });

//     r.get(urls[1], function(err2, response2){
//         let body2 = JSON.parse(response2.body)
//         console.log(body2.CurrValue)
//         console.log(utilFn.toFloat(body.CurrValue) + utilFn.toFloat(body2.CurrValue) )
//     });

// });

//  callback hell
//  Promise
//  Resolve/Reject
//  then/catch

// var promise = new Promise(function(resolve, reject){
//    fs.readFile('temp.txt', 'utf-8', function(err, content){
//     if(err){
//         reject(err);
//         return;
//     }

//     resolve(content);
//    });
// });

var promiseReadFile = util.promisify(fs.readFile)
promiseReadFile('temp.txt', 'utf-8').then((content)=>{
    urls = content.split('\n');
    
    let promises = []
    let promise1 = rp.get(urls[0])
    let promise2 = rp.get(urls[1])



 

    promises.push(promise1)
    promises.push(promise2)

    var allpromises = Promise.all(promises)
    allpromises.then((result)=>{
        let out = ""
        for(i=0;i<result.length;i++){
            out += JSON.parse(result[i]).CurrValue
        }
        
        return Promise.resolve(out)
    }).then((out)=>{
        console.log(out)
        return Promise.reject(new Error('eeeee'))
    }).
    then(()=>console.log('then'))
    .catch(()=>console.log('catch'))

   


})


console.log('end')

//  all
//  Promisify
// TODO async await
// TODO Event loop
// TODO Event listener


