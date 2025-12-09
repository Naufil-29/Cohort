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

// isEven(10);

// interface User { 
//     name: string,
//     age: number,
//     address: { 
//         city: string,
//         country: string,
//         pincode: number
//     }
// }

// let user: User = { 
//     name: "harkirat",
//     age: 21,
//     address: { 
//         city: "chandigarh",
//         country: "India",
//         pincode: 156005
//     }
// }


// function isLegal(user: User): boolean { 
//     if(user.age >= 18){ 
//         return true
//     }
//     else{
//        return false
//     }
// }

// let ans = isLegal(user);
// if(ans){ 
//     console.log("legal")
// }
// else{ 
//     console.log("illegal")
// }


// interface People { 
//     name: string,
//     age: number
//     // greet: () => string
// }

// class Manager implements People { 
//     name: string;
//     age: number;
//     // greet: () => string;

//     constructor(name: string, age: number){ 
//         this.name= name;
//         this.age= age
//     }

// }

// let user = new Manager("john", 30)



// expample of abstract classs

// abstract class User { 
//     name: string;
//     constructor(name: string){ 
//         this.name = name;
//     }

//     abstract greet: () => string;
// }

// class Employee implements User{ 
//     name: string;
//     constructor(name: string){ 
//         this.name = name
//     }

//     greet () { 
//         return "hi" + this.name
//     }
// }


// example of union in type

// type Employee = { 
//     name: string,
//     startDate: string
// }

// type Manager = { 
//     name: string,
//     department: string
// }

// type teamLead = Employee & Manager;

// let e : Employee = { 
//     name: "harkirat",
//     startDate: "01/02/2004"
// }

// let m : Manager = { 
//     name: "harkirat",
//     department: "electricity"
// }

// let t : teamLead = { 
//     name: "harkirat",
//     startDate: "01/02/2004",
//     department: "electricity"
// }

interface User { 
    firstName: string,
    lastName: string,
    age: number
}

function filterUsers(users: User[]): User[] {   // <- return type added
    let ans: User[] = [];                       // <- array type added

    for (let i = 0; i < users.length; i++) { 
        if (users[i]!.age > 18) { 
            ans.push(users[i]!);
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
