const r  = require('request');

console.log('start')

r.get('http://google.com',function(err, response){
    console.log(response.body)
});
console.log('end')