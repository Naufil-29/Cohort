// const matrix = [ 
//     ['A1', 'A2', 'A3'],
//   ['B1', 'B2', 'B3'],
//   ['C1', 'C2', 'C3']
// ];

// let numberOfRows = 2;
// let ColIndex = 2;


// function getColumn(matrix, numberOfRows, ColIndex) { 

// let column = [];
// for(let i = 0; i < numberOfRows; i++){ 
//   column.push(matrix[i][ColIndex])

// }
// console.log(column)

// }

// getColumn(matrix, numberOfRows, ColIndex)

// const grid = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];
// const rowIndex = 2;

// function getElementsInRow(grid, rowIndex){ 


// if(rowIndex > grid.length || rowIndex < 0){ 
//   console.log([])
// }
// console.log(grid[rowIndex])
// }

// getElementsInRow(grid, rowIndex)

const seats = [
  ["true", "true", "false"],
  ["true", "false", "false"]
];

let target = "true"

function countOccurences(seats, target){ 
  let count = 0;
  for(let r = 0; r < seats.length; r++){ 
    for(let c = 0; c < seats[r].length; c++){ 
      if(seats[r][c] == target){ 
        count++
      }
    }
  }

  // console.log(count)
}
countOccurences(seats, target)

// const matrix = [ 
//   [3, 7, 2],
//   [9, 1, 5],
//   [6, 0, 4]
// ]
// // BigInt = []

// function findMaxInRows(matrix) { 
  
//   for(let r = 0; r < matrix.length; r++){ 
//     let max = matrix[r][0];
//     for(let c = 0; c < matrix[r].length; c++){ 
//       if(matrix[r][c] > max){ 
//         max = matrix[r][c]
//       }
//     }
//     BigInt.push(max)
//   }
//  console.log(BigInt)
// }

// findMaxInRows(matrix)

// function mirrorRows(matrix){ 
//   let reversedArr = []
//   for(let r = 0; r < matrix.length; r++){ 
//     reversedArr.push(matrix[r].reverse())
//   }
//   console.log(reversedArr)
// }

// mirrorRows(matrix)

let matrixA = [ 
  [1, 2],
  [3, 4]
]

let matrixB = [ 
  [5, 6],
  [7, 8]
]

// let op = "-"



// function combineMatrix(matrixA, matrixB, op){ 
//     let newArr = []
//   for(let r = 0; r < matrixA.length; r++){ 
//     for(let c = 0; c < matrixA[r].length; c++){ 
//     //   if(op === "+"){ 
//         newArr.push(matrixA[r][c] * matrixB[c][r] )
//     //   }
//     }
// }
// console.log(newArr)

  
// }

// combineMatrix(matrixA, matrixB, op)

function multiplyMatricies(matrixA, matrixB){ 
    let rowsA = matrixA.length;
    let rowsB = matrixB.length;
    let colsA = matrixA[0].length;
    let colsB = matrixB[0].length;
    console.log(rowsA, colsA, rowsB, colsB)// 2 2 2 2

    if(colsA !== rowsB){ 
        return null// multipy not possible between them
    }

      // Step 3: result matrix banao (m × p)
      const result = [];

      for(let i = 0; i < rowsA; i++){ 
        console.log(result[i] = [])
      // row0=[], row1=[]

      for(let j = 0; j < colsB; j++){
        let sum = 0

        for(let k = 0; k < colsA; k++){ 
            sum += matrixA[i][k] * matrixB[k][j]
        }

        result[i][j] = sum;
      }
    }

      console.log(result)
}

multiplyMatricies(matrixA, matrixB)