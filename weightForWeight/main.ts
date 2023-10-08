import { strictEqual } from "assert"

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
    console.log(resultArr.map((x) => { return x.toString() }).join(" "))
    return resultArr.map((x) => { return x.toString() }).join(" ")

}

function sortArray(arr: number[]): number[] {
    return arr = arr.sort(function (a, b) { return a - b })
}

let res = orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123")

console.log(strictEqual(res, "11 11 2000 10003 22 123 1234000 44444444 9999"))