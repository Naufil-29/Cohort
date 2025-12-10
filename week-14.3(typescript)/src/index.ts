// interface User{ 
//     name: string,
//     age: number
// }

// function sumOfAge(user1: User, user2: User){ 
//     return user1.age + user2.age
// }

// const age = sumOfAge({ name: "tiro", age:21 }, { name: "jiro", age: 20 });
// console.log(age)


// example of updating UserInterface props(Pick Api)

// interface User{ 
//     id: string
//     name: string,
//     age: string,
//     email: string,
//     password: number,
// }

// type UpdatedProps = Pick<User, 'name' | 'age' | 'email'>

// type UpdatedPropsOptional = Partial<UpdatedProps>//Partial Api

// function updateUser (UpdatedProps: UpdatedPropsOptional){ 
//         // hit the database to update the user
// }

// ReadOnly Api

// type userInfo = { 
//     readonly name: string,
//     readonly age: number
// }

// const userP: Readonly<userInfo> = { 
//     name: "harkirat",
//     age: 21
// }

// userP.age = 22;

//Record Api

// type Users = Record<string, {age: number; name: string;}>

// let user: Users = { 
//    "Id1": { age: 21, name: "harkirat"},
//    "Id2": { age: 23, name: "hajkirat"}
// }

// Map 

type User = { 
    name: string,
    age: number,
    email: string
}

const users = new Map<string, User>()
users.set("u1@load", {name: "harkirat", age: 21, email: "u1@load"})
users.set("u2@load", {name: "sarah", age: 20, email: "u2@load"})

const usermm = users.get("u1@load")
console.log(usermm)