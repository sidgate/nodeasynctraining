const fsp = require('fs').promises
const rp = require('request-promise')

let fileP = fsp.readFile('temp.txt','utf-8');

function concatenateCurrValues(responses){
    let output = responses.map((response)=>{
        return JSON.parse(response).CurrValue
    })
    .reduce((prv, CurrValue)=> prv +" " + CurrValue)
    return output;
}

function requestAllUrls(listOfUrls){
    let urls = listOfUrls.split('\n');
    return urls.map(url=> rp.get(url));
}

fileP.then(function(content){
    return requestAllUrls(content)
})
.then(function(responsesP){
    return Promise.all(responsesP)
})
.then(concatenateCurrValues)
.then(function(output){
    console.log(output)
})