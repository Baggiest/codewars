function orderWeight(strng: string): string {

    const inputArr: number[] = strng.split(" ").map((x) => {

        return parseInt(x)
    })

    const digitSumArray: number[] = inputArr.map((x) => {

        let acc = 0
        let digits = x.toString().split("").map((x) => {
            return parseInt(x)
        })

        // console.log(digits)

        for (let i in digits) {
            acc += digits[i]
        }

        return acc
    })

    // let mergedArray: any = () => {

    //     // this is just a key value array
    //     // console.log(inputArr, digitSumArray)

    //     let resultArr: number[][] = []
    //     for (let i in inputArr) {
    //         resultArr.push([inputArr[i], digitSumArray[i]])
    //     }
    //     console.log(resultArr)
    //     return resultArr
    // }

    console.log({ digitSumArray })
    let dictionary = new Map()

    for (let i in inputArr) {
        dictionary.set(inputArr[i], digitSumArray[i])
    }

    console.log({ inputArr, digitSumArray })
}

function sortArray(arr: number[]): number[] {
    return arr.sort(function (a, b) { return b - a })
}

orderWeight("103 123 4444 99 2000")