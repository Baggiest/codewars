function short(s: string) {

    let inputArray: string[] = s.split(" ") // the words
    let lengthArray: number[] = [] // length of the words

    // console.log(inputArray)

    for (let i in inputArray) {
        let indexWord = inputArray[i]
        let wordLength = indexWord.split("").length

        lengthArray.push(wordLength)
    }

    // console.log(Math.min(...lengthArray))

    return Math.min(...lengthArray)
}

short("bitcoin take over the world maybe who knows perhaps")