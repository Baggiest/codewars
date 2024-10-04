

function* fibonacciSequence(): Iterator<bigint> {

    let firstElement = 1
    let secondElement = 1

    let bigintFibArr: bigint[] = []

    bigintFibArr[0] = BigInt(firstElement)
    bigintFibArr[1] = BigInt(secondElement)

    let i = 2;

    while (true) {

        bigintFibArr.push(BigInt(bigintFibArr[i - 2]) + BigInt(bigintFibArr[i - 1]));
        yield bigintFibArr[i - 2]
        i++;
    }
}

const gen = fibonacciSequence()

for (let i = 0; i < 100; i++) {
    console.log(i + ". \n" + gen.next().value)
}
