const rp = require('request-promise');
const util = require('util')
const r = require('request');

async function pizzaDelivery(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Pizza ordered!"), 0)
    });
    
    let result = await promise; 
    console.log(result); 
    let promise1 = new Promise((resolve,reject)=>{
            setTimeout(()=>resolve("Wait for pizza to arrive"),5000)
        })
        let result1 = await promise1;
        console.log(result1)
        console.log("Pizza has arrived")
        
    }

pizzaDelivery();
console.log("Pizza selected ")

