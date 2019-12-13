// const utilFn = require('./util-fn');
const util = require('util')
// const r = require('request');
const rp = require('request-promise');
const fs = require('fs')


console.log('start')

// fs.readFile('temp.txt','utf-8', function(err, content){
// });

var promReadfile = util.promisify(fs.readFile)

    promReadfile('temp.txt','utf-8').then((content)=>{
        urls = content.split('\n');
        
        // var prom1 = rp.get(urls[0]);
        // var prom2 = rp.get(urls[1]);

        let urlResponse = urls.map(urls=> {
            return rp.get(url)
        }).then(function(responseP){
            return Promise.all(responses)
        }).then(function(){
           let output = responses.map((response)=> {
                return JSON.parse(response).CurrValue
            }).reduce((prv,Currvalue)=> prv + ' ' + Currvalue)

            return output;
        })
        
//     var promise = Promise.all([prom1,prom2]).then((response)=>{
//                                                                 // for(var i=0;i<2;i++)
//                                                                 // {
//                                                                     // bodyOne = JSON.parse(response[0])
//                                                                     // var a = 0 + bodyOne.CurrValue
//                                                                     // bodyTwo = JSON.parse(response[1])
//                                                                     // var b = 0 + bodyTwo.CurrValue;
//                                                                     // console.log(a + b)
//                                                                 // }

//             response.map(data => {
//             body = JSON.parse(data);

//             var result=0; 
//             result=result+body.CurrValue;
           
//             return result;
//         })
//     });
//     promise.then((result)=>{
//         console.log("final answer =>" + result);
//     })
 });

console.log('end')