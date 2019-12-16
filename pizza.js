function orderpizza() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('order pizza ready');
      }, 5000);
    });
  }
  function orderdrinks() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('order drinks ready');
      }, 2000);
    });
  }
  async function asyncCall() {
    console.log('select pizza');
    var result = await orderpizza();
    console.log(result);
    // expected output: 'resolved'
    console.log('select drinks');
    var result = await orderdrinks();
    console.log(result);
  }
  asyncCall();

