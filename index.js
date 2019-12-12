const utilFn = require('./util-fn');
const util = require('util')
//const r = require('request');
//const fs = require('fs')


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

console.log(new Person('si2').getFullName())


// TODO function class
// TODO prototype function
// TODO ES6 class function
// TODO prototype function (lambda)
// TODO function as parameter
// TODO setTimeout
// TODO callback
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


console.log('start')

print2()

console.log('end')