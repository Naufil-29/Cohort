// Write a program that receives an array of numbers as input (given), and prints an array of the numbers 
// that are either below 50 or are divisible by 5. Use the forEach method.


// let numbers = [1, 5, 10, 31, 52];

// let arr = [];

// numbers.forEach((number) =>{ 
//     if(number < 50 && number % 5 === 0){
//          arr.push(number)
//     }
// })
// console.log(arr)



//Write a function named countVowels that takes a string as an argument and returns the number of vowels (a, e, i, o, u) 
// in the string. Use a for...of loop to iterate over the characters of the string.

//For example:

//countVowels("hello") should return 2
//countVowels("javascript") should return 3

// let str = "Hello";
// let vowels = "aeiouAEIOU";
// let found = "";


// function countVowels(str){ 
//     for(const char of str){ 
//         if(vowels.includes(char)){ 
//            found += char;
//         }
//     }

//     console.log(found ) 
//     console.log(found.length)
// };

// countVowels(str);


// Write a function named countDigits that takes a string as an argument and returns the number of digits (0-9) in the string.
//  Use a for...of loop to iterate over the characters of the string.

// For example:

// countDigits("hello123world") should return 3
// countDigits("2020year") should return 4


// let str = "hello12world3";

// function countDigits(str){ 
//     let numbers = "0123456789"
//     let foundnums = ""


//     for(const char of str){ 
//         if(numbers.includes(char)){ 
//             foundnums += char;
//         }
//     };
//     console.log(foundnums.length)
// };

// countDigits(str);


// Create a program that receives a string as input (given), and it prints how many times
//  the character p is in the string.

// Some chars might be upper cased, use char.toLowerCase() to convert it to lower cased.

// let text = "apple Pie";

// function pCount (str){ 
//     let pTimes = "";

//     let smallCase = text.toLowerCase()
//     for(const char of smallCase){ 
//         if(char === "p"){ 
//             pTimes += char;
//         }
//     };

//     console.log(pTimes.length)
// };

// pCount(text)



// Create a program that receives an array as input (given) and prints the following sliced arrays:

// For odd-length arrays: take the middle item and one item on each side (3 items total)
// For even-length arrays: take the two middle items
// For this challenge, use Math.floor() because array slicing only works with whole numbers.

// Example, Math.floor(5.5) will return 5 as it find the floor of a float number


let arr = [1, 2, 3, 4, 5, 6];

function sliceArr (arr){ 
    let slicedarr = [];
    if(Math.floor(arr.length % 2 === 0)){ 
         slicedarr += arr.slice(2, 4)
    }
    else{ 
         slicedarr += arr.slice(1, 4)
    }

    console.log(slicedarr)
};

sliceArr(arr);


