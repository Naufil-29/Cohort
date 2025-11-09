const axios = require('axios');


 async function main(){ 
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data.length);
 };

 async function main2(){ 
    const response2 = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(response2.data.length)
 };

 main();

 main2();