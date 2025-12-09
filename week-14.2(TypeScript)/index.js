"use strict";
// function isEven(num: number):boolean { 
//     if(num % 2 === 0){ 
//         return true
//         console.log("IsEven")
//     }
//     else{ 
//         return false
//         console.log("notIsEven")
//     }
// }
Object.defineProperty(exports, "__esModule", { value: true });
function filterUsers(users) {
    let ans = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].age > 18) {
            ans.push(users[i]);
        }
    }
    return ans;
}
const filteredUsers = filterUsers([
    {
        firstName: "harkirat",
        lastName: "singh",
        age: 21
    }
]);
console.log(filteredUsers);
//# sourceMappingURL=index.js.map