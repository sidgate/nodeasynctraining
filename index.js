const utilFn = require('./util-fn');
const util = require('util')
const r = require('request');
const fs = require('fs');
const rp = require('request-promise');

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
// // TODO function as parameter

// function add(a,b) { return a+b}

// function subs(a,b) {return a-b}

// function calculator(a,b, op ){
//     return op(a,b)
// }

// //console.log(calculator(20,10,subs))

// // TODO setTimeout 
// function readFile(filename){
    
//     let callback = function(){
//         console.log(filename)
//         utilFn.longRunningFn(3000)
//         console.log('done '+ filename)
//     }

//     setTimeout(callback)
    
// }

// let urlCallback = function(urls){
//     return function(err, response){
//         let body = JSON.parse(response.body)
//         console.log(body.CurrValue)
//         if(true){
//             r.get(urls[1], function(err2, response2){
//                 let body = JSON.parse(response2.body)
//                 console.log(body.CurrValue)
//             })
//         }
//     }
// }

// var promise = new Promise(function(resolve,reject){
//     fs.readFile('temp.txt','utf-8',function(err,content){
//         // let urls = content.split('\n');
//         if(err)
//         {
//             reject(err);
//             return;
//         }
//         else
//         {
//             resolve(content);
//         }
//     })
// });
// promise.then((content)=>{
//     // r.get(urls[0], function(err2, response2){
//     //     let body = JSON.parse(response2.body)
//     //     console.log(body.CurrValue)
//     console.log(content)
// })

// promise.catch((err)=>{
//     console.log(err)
// })

console.log('start')

fs.readFile('temp.txt','utf-8', function(err, content){
//    console.log(content)     
});

var promiseReadFile = util.promisify(fs.readFile)
promiseReadFile('temp.txt','utf-8').then((content)=>{
    urls = content.split('\n');

    var promise1 = rp.get(urls[0])
    // console.log(promise1)
    var promise2 = rp.get(urls[1]);

    var promises = Promise.all([promise1,promise2]).then((response)=>{
        for(var i=0;i<2;i++)
        {
            body = JSON.parse(response[i])
            console.log(body.CurrValue)
        }
    })
})

console.log('end')

// TODO async await
// TODO Event loop
// TODO Event listener