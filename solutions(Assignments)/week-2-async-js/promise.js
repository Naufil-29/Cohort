async function promisifiedSetTimeout(n){
     let p = new Promise((resolve) => { 
        setTimeout(() => { 
           resolve()
         },n *1000);
      });

      console.log(p);
};

promisifiedSetTimeout(3);

/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/