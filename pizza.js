function startProcess()
{
    console.log("=====Start Pizza App======");
    console.log("");
    console.log("");
    console.log("Order Pizza and Drinks for Party");
    console.log("select pizza");
    console.log("select Colddrinks");
}

async function Delivery()
{
    var selectPizza = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("selected pizza order");
        },800)
    });
    var result = await selectPizza;
    console.log("===============");
    console.log(result);

    var selectColdrinks = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("selected colddrink order");
        },800)
    });
    var result1 = await selectColdrinks;
    console.log(result1);

    var waitForPizza = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("waiting for pizza to arrive");
        },1200)
    });
    var result3 = await waitForPizza;
    console.log("===============");
    console.log(result3);
    
    var waitForColdrink = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("waiting for coldrink to arrive");
        },1200)
    });
    var result4 = await waitForColdrink;
    console.log(result4);
     
    var orderedPizzaArrive = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Pizza arrived");
        },2000)
    });
    

    var orderedColdrinkArrive = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Coldrink arrived");
        },1000);
    });

    var result5 = await orderedPizzaArrive;
    console.log("===============");
    console.log(result5);

    var result6 = await orderedColdrinkArrive;
    console.log(result6);
}
startProcess();
Delivery();