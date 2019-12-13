const fsp = require("fs").promises;
const promisify = require('util').promisify

const rp = require("request-promise");

function concatenateCurrValues(responses) {
  let output = responses
    .map(response => {
      return JSON.parse(response).CurrValue;
    })
    .reduce((prv, CurrValue) => prv + " " + CurrValue);
  return output;
}

function requestAllUrls(listOfUrls) {
  let urls = listOfUrls.split("\n");
  let responsesP = urls.map(url => rp.get(url));
  return Promise.all(responsesP);
}


async function main() {
  let content = await fsp.readFile("temp.txt", "utf-8");
  let responses = await requestAllUrls(content);
  let output = concatenateCurrValues(responses)
  console.log(output);
   
}

async function main() {
    let content = await fsp.readFile("temp.txt", "utf-8");
    console.log('file read')
    let p1 =  requestAllUrls(content);
    
    let p2 =  rp.get('http://google.com')

    let googleResponse = await p2

    console.log('google read' + googleResponse)

    let responses = await p1
    let output = concatenateCurrValues(responses)
    console.log(output);
     
  }


main();



//pizza

//decide on pizza
// order a pizza
// order for colddrinks 
//wait for colddrinks
// wait for pizza delivery
// enjoy

function waitForPizza(){
    
    setTimeout(function(){
        console.log('pizza ready')
    },5000)
}
