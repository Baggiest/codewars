function pyramid(n: number): Array<Array<Number>> {

    let result: number[][] = [];

    for (let i = 0; i < n; i++) {
        result.push([])

        for (let j = 0; j < i + 1; j++) {
            result[i].push(1)
        }
    }
    console.log(result)
    return result;
}

pyramid(0)
pyramid(1)
pyramid(2)
pyramid(3) 
