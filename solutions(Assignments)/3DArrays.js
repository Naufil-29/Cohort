let arr3D =[ [["hello", "world"], ["test"], ["coding"]], 
[["array"], ["javascript"], ["fun", "times"]], 
[["three", "dimensional"], ["data", "structure"]] ]

// function countAllStrings(arr3D){ 
    //     let simpleArr = []
    //     for(let b = 0; b < arr3D.length; b++){ 
        //        for(let f = 0; f < arr3D[b].length; f++){ 
            //         for(let r = 0; r < arr3D[b][f].length; r++){ 
                //             simpleArr.push(arr3D[b][f][r])
                //            }
                //        }
                //     }
                //     console.log(simpleArr.length)
                // }
                
                // countAllStrings(arr3D)
                
const arr2D = [
[ ["R1", "R2"], ["R3", "R4"] ],
[ ["R5", "R6"], ["R7", "R8"] ]
];
let x = 0;
let y= 1
let z = 2

function find3DElement(arr2D, x, y, z){ 
   if(x < 0 || x >= arr2D.length){ 
    console.log("Invalid coordinates")
   }
   else if(y < 0 || y >= arr2D[x].length){ 
    console.log("Invalid coordinates")
   }
   else if(z < 0 || z >= arr2D[x][y].length){ 
    console.log("Invalid coordinates")
   }
   else{
   console.log(arr2D[x][y][z])
   }
}

find3DElement(arr2D, x, y, z)