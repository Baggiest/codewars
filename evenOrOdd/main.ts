function oddOrEven(array: number[]) {
    // enter code here
    let acc: number = 0

    for (let i in array) {
        acc += array[i]
    }

    if (acc % 2 === 0) return "Even"
    return "Odd"
}

oddOrEven([1, 2, 0, -2, -3, 5])