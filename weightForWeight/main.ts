function orderWeight(strng: string): string {

    let resultArr: string[] = []
    let inputArr: number[] = strng.split(" ").map((x) => {

        return parseInt(x)
    })

    let digitSumArray: number[] = inputArr.map((x) => {

        let acc = 0
        let digits = x.toString().split("").map((x) => {
            return parseInt(x)
        })

        for (let i in digits) {
            acc += digits[i]
        }
        return acc
    })

    // This line below decreased my life expectancy by 8 years and my will to live by 90%
    let sortedDigitArray = sortArray([...digitSumArray])
    let dictionary = new Map()

    for (let i in inputArr) {
        dictionary.set(digitSumArray[i], inputArr[i])
    }

    for (let i in sortedDigitArray) {
        resultArr.push(dictionary.get(sortedDigitArray[i]))
    }

    console.log({ inputArr, digitSumArray, sortedDigitArray, resultArr })
    return resultArr.map((x) => { return x.toString() }).join(" ")
}

function sortArray(arr: number[]): number[] {
    return arr = arr.sort(function (a, b) { return b - a })
}

orderWeight("103 123 4444 99 2000")