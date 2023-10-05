function square(num: number) {

    let inputArray = num.toString().split("")
    let resultString: string[] = []

    console.log(inputArray)

    for (let i in inputArray) {

        num = Math.pow(parseInt(inputArray[i]), 2)
        resultString.push(num.toString())
    }

    let result = parseInt(resultString.join(""))
    return result
}
square(2134)