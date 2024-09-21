function ipsBetween(start: string, end: string): number {

    // console.log(`first ip value ${ipToInt(start)} second ip value ${ipToInt(end)}`)
    console.log(ipToInt(end) - ipToInt(start))
    return (ipToInt(end) - ipToInt(start))
}
function ipToInt(inputRaw: string): number {

    let result = 0;

    // "0.0.2.1" 
    // -> ["0". "0". "2" . "1"] 
    // -> [0, 0, 2, 1] 
    // -> 1 x 256^0 + 2 x 256^1
    // -> 513

    let inputString: string[] = inputRaw.split(".")
    let inputArray: number[] = inputString.map((x) => { return parseInt(x) })

    for (let i = inputArray.length - 1; i >= 0; i--) {
        // i starts at 4
        // console.log("ran")
        // console.log("index: " + i)
        // console.log("value: " + inputArray[Math.abs(i - 3)])
        result += inputArray[Math.abs(i - 3)] * Math.pow(256, i);
    }

    // console.log({ inputString, inputArray })
    // console.log(result)

    return result
}

// ipsBetween("0.0.2.1", "0.0.3.2")
ipsBetween("10.0.0.0", "10.0.0.50")