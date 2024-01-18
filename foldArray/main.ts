function foldArray(array: number[], runs: number): number[] {

    let result: number[] = []
    let arrLength = array.length

    console.log({ arrLength, array })
    // console.log(arrLength, result[(arrLength-1)/2])


    for (let i = 0; i < array.length / 2; i++) {
        // arrLength = array.length
        console.log(`array[${i}] + array[${arrLength - i - 1}]`)
        result[i] = array[i] + array[arrLength - i - 1]

    }

    if (array.length % 2 === 1) {
        result[result.length - 1] = result[result.length - 1] / 2
        console.log(result.length - 1)
    }

    if (runs == 1){
        return result
    }
    else{
        runs--
        return foldArray(result, runs)
    }
}

console.log(foldArray([1, 2, 3, 4, 5, 99, 88, 78, 74, 73], 5))
// console.log(foldArray([74, 76, 81, 92, 104], 5))
// 74 76 81 92 104
// 178 168 81
// 259 168 
// 417

// console.log(foldArray([1, 2, 3, 4, 5], 5))
// console.log(foldArray([-9, 9, -8, 8, 66, 23, 21], 1))

// foldArray([1, 2, 3, 4, 5], 2)
// foldArray([1, 2, 3, 4, 5], 3)

// Step 1         Step 2        Step 3       Step 4       Step5
//                      5/           5|         5\          
//                     4/            4|          4\      
// 1 2 3 4 5      1 2 3/         1 2 3|       1 2 3\       6 6 3
// ----*----      ----*          ----*        ----*        ----*

