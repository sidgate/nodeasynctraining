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
// TODO function as parameter

function add(a,b) { return a+b}

function subs(a,b) {return a-b}

function calculator(a,b, op ){
    return op(a,b)
}

console.log(calculator(20,10,subs))

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


