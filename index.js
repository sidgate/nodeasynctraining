const utilFn = require('./util-fn');
const util = require('util')
const r = require('request');
const fs = require('fs');
const rp=require('request-promise');


// TODO functions, lambda

// function print(){
//     console.log('hello')
// }

// let print2 = ()=> console.log('hello2')

// let print3 = function(){
//     console.log('hello3')
// }

// function Person(name){
// this.name = name

// this.getName = function(){
//     return this.name;
// }
// }




// class Person2 {
//     constructor(name){
//         this.name = name;
//     }

//     getName(){
//         return this.name;
//     }
// }
// TODO function as parameter

// function add(a,b) { return a+b}

// function subs(a,b) {return a-b}

// function calculator(a,b, op ){
//     return op(a,b)
// }

//console.log(calculator(20,10,subs))

// TODO setTimeout 
// function readFile(filename){
    
//     let callback = function(){
//         console.log(filename)
//         utilFn.longRunningFn(3000)
//         console.log('done '+ filename)
//     }

//     setTimeout(callback)
    
// }
// function urlCallback (urls){

//     return function(err, response){
//         let body = JSON.parse(response.body)
//         console.log(body.CurrValue)
//         if(true){
//             r.get(urls[1], function(err2, response2){
//                 let body = JSON.parse(response2.body)
//                 console.log(body.CurrValue)
//             });
//         }
//     };
// }


// console.log('start')

// fs.readFile('temp.txt','utf-8', function(err, content){
//     let urls = content.split('\n');
//     r.get(urls[0], urlCallback(urls));

// });

// console.log('end')

// var promise = new Promise(function(resolve, reject){
//     //action that gives resolve or reject
//     // resolve({a:"hello", b:"bye"});
//     reject(new Error);
// });

// promise.then((content, result)=>{
//     console.log(content.a+content.b);
// }).catch((err)=>{
//     console.error(err);
// })


var promise=new Promise(function(resolve, reject){
    fs.readFile('temp.txt', 'utf-8', function(err, content){
        if(err)
        {
            reject(err);
            return;
        }
        else{
            resolve(content);
        }
    })
});

promise.then((content)=>{
    console.log(content);
    urls=content.split('\n');
    
    let promises=[];
    promises[0]=rp.get(urls[0]);
    promises[1]=rp.get(urls[1]);
    
    
    var allpromises= Promise.all(promises);
    allpromises.then((result)=>{
        let out="";
        for(i=0;i<result.length;i++)
        {
            out+=JSON.parse(result[i].CurrValue);
        }

    })

    let promises = urls.map(function(url){
        return rp.get(url);
    }).map(function (promise){
        return promise.then((body)=>{
            return JSON.parse(body).CurrValue;
        })
    })

    promise.all(promises).then((arr)=>{
        console.log(arr[0]+" "+ arr[1]);
    })
})


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
