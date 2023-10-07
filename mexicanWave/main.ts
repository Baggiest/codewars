function wave(str: string): Array<string> {
    // Good luck
    str = str.trim()
    let inputArr = str.split("")
    let outputArr: string[] = []

    for (let i in inputArr) {

        if (inputArr[i] === " ") continue;

        inputArr[i] = inputArr[i].toUpperCase()
        outputArr.push(inputArr.join(""))
        inputArr[i] = inputArr[i].toLowerCase()

    }

    console.log(outputArr)
    return outputArr
}

wave("mmmmmmmm mmmmm m")