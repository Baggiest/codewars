
function unique(arr: number[]) {

    // for (let i in arr) {

    //     let index: number = parseInt(i)
    //     // console.log(index + 1)

    //     if (arr[index - 1] !== arr[index] && arr[index] !== arr[index + 1]) {

    //         console.log(arr[i])
    //         return arr[i]
    //     }
    // }
    let i: number = 1
    while (i < arr.length) {

        console.log(arr[i], arr[i-1], arr[i + 1])

        if (arr[i - 1] !== arr[i] && arr[i] !== arr[i + 1]) {

            console.log(arr[i])
            return arr[i]
        }
        else {

        }
        i++
    }
}

unique([2, 4, 2, 2, 2, 2, 2, 2])