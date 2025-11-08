//what is map and filter
// map and filter are helper function to do task on array.

//what is arrow function


//Example of map

//given an array , output and make it new array that every value in array is multiplied by 2.

//without map function
let input = [1, 2, 3, 4, 5];

let newInput = []
 for(let i = 0; i < input.length; i++){ 
   newInput.push(input[i] * 2);
 };

 console.log(newInput);



 // with map 
function transform(i) {
    return i * 2;
 };

 const ans = input.map(transform);
 console.log(ans)



 //Example of filter given an array output an new array contains only even values of old array.

 //without filter
 let oldArr = [1, 2, 3, 4, 5, 6];
 let newArr = []
 for (let i = 0; i < oldArr.length; i++){ 
    if(oldArr[i] % 2 === 0){ 
        newArr.push(oldArr[i]);
    };
 };

 console.log(newArr);

//  using filter

 let arr = [1, 2, 3, 4, 5, 6];

 const answer = arr.filter(function(n){ 
    if(n % 2 === 0){ 
        return true;
    }
    else{ 
        false;
    }

})
console.log(answer)