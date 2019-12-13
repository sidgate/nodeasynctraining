let arr = [1,2,3,4,5]
let temp = []
for(i=0;i<arr.length;i++){
    if(arr[i]%2 == 0)
    temp.push(arr[i]* arr[i])
}

//map - > 
// filter -> 
// reduce -> 

[1,2,3,4,5].map(function(val){
    return val * val;
}).forEach((v)=>console.log(v))

Array.prototype.customMap = function(callback){
    let temp = []
    for(i=0;i< this.length;i++){
        temp.push(callback(this[i]))
    }
    return temp;
}

let callback = function(val){
    return val * val;
}
arr.customMap(callback).forEach((v)=>console.log(v))
