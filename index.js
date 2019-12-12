const utilFn = require('./util-fn');
const util = require('util')
const r = require('request');
const rp = require('request-promise');
const fs = require('fs')


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

console.log('start')

// var urlCall = function (urls) {
//         return function (err, response){
//             let body = JSON.parse(response.body)
//             console.log(body.CurrValue)
            
//                 if(true){
//                     r.get(urls[1], function(err2, response2){
//                     let body = JSON.parse(response2.body)
//                     console.log(body.CurrValue)
//                     });
//             }
//         }
//     }


// fs.readFile('temp.txt','utf-8', function(err, content){
//     // let urls = content.split('\n');
//     // r.get(urls[0], urlCall(urls));
// });


// var promise = new Promise(function(resolve,reject){
//         fs.readFile('temp.txt', 'utf-8', function(err,content){
//             if(err){
//                 reject(err);
//                 return;
//             }
//             resolve(content);
//         });
        
// });

// var promReadFile = util.promisify(fs.readFile)
//     promReadFile('temp.txt','utf-8').then((content) => {
//         urls = content.split('\n');
//         urls.map(function(url)) {
//             return rp.get(url);
//         })
//     })

// promise.then((content) => (
//     console.log(content)
// ))
fs.readFile('temp.txt','utf-8', function(err, content){
});

var promReadfile = util.promisify(fs.readFile)

    promReadfile('temp.txt','utf-8').then((content)=>{
        urls = content.split('\n');
        var prom1 = rp.get(urls[0]);
        var prom2 = rp.get(urls[1]);

     prom1.then((response)=>{
         body = JSON.parse(response)
        console.log(body.CurrValue)
     })

     prom2.then((response)=>{
         body = JSON.parse(response)
         console.log(body.CurrValue);
     })

    // Promise.all([prom1,prom2]).then((response)=> {
    //         body = JSON.parse(response)
    //         console.log(body.CurrValue);
    //     })
});








console.log('end')


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


