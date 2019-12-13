const r= require('request');
r.get('http://google.com',function(err,content)
{
    console.log(Response.body)
});
console.log('end')