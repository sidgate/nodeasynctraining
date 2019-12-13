// const fs = require('fs')

// 
// // select pizza
// // order pizza
// // order drinks
// // wait for drinks 5sec 
// // wait for pizza to arrive
// // chill


// function waitingTime() {
//     setTimeout(() => {
//         console.log('Confirmed! Pizza is being prepared');
//     }, 3000);
//     setTimeout(() => {
//         delivered()
//     }, 5000);
// }

// function waitingTimeOrder() {
//     setTimeout(() => {
//         console.log('Waiting Confirmation');
//     }, 1000);
// }

// function orderPizza(){
//     console.log('2 Pizzas ordered');   
// }

// function orderDrinks() {
//     console.log('Drinks ordered');   
// }

// orderPizza();
// waitingTimeOrder();
// orderDrinks();
// waitingTime(delivered);

// function delivered(){
//     console.log("Pizza and Drinks are here! Its Chill Time!");
// }




// const rp = require('request-promise');
const util = require('util')
const r = require('request');

console.log('Lets Order Pizzaaa and Some Drinks!...\n');

console.log("Pizza Selected!")
console.log("Drinks Selected!!")

pizzaDelivery();

async function pizzaDelivery(){
    
    let orderingPromise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Pizza ordered!"))
    });
    let result = await orderingPromise;
    console.log(result);

    let drinksOrdered = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Drinks ordered!"),2000)
    });
    let result2 = await drinksOrdered;
    console.log(result2);

    let drinksArrived = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Drinks Arrived!"),2000)
    });
    let result4 = await drinksArrived;
    console.log(result4);

    let pizzaWait = new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("Waiting for pizza to arrive"),5000)
    })
    let delivery = await pizzaWait;
    console.log(delivery)

    let pizzaArrived = new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("Yay!!! Pizza has arrived."),5000)
    })
    let arrived = await pizzaArrived;
    console.log(arrived)


}