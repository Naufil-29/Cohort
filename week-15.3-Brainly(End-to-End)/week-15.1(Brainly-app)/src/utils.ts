export function random(len: number){ 
    let options = "qwertyyuioasdfghjklzxcvbnm12345678";
    let length = options.length;

    let ans: string = "";
    for(let i = 0; i < len; i ++){ 
        ans += options[Math.floor((Math.random() * length))]
    }

    return ans;

}