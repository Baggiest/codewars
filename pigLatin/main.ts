export const pigIt = (a: string): string => {
    // code away
    // "hel  lo world"
    let inputArrayWords: string[] = a.split(" "); // ["Hello", "world", "!"]
    console.log(a)
    let inputCharactersOfWord: string[] // ["H", "e", "l", "l", "o"]

    let asciiValue: number;
    let firstCharacterOfWord: string;

    let outputCharacterOfWord: string[]
    let outputArrayWords: string[] = []
    let output: string

    for (let i in inputArrayWords) {
        // iterates over inputArrayWords and does the pig thingy to each
        asciiValue = inputArrayWords[i].charCodeAt(0)


        if (asciiValue < 65 || (asciiValue > 90 && asciiValue < 97)) {
            // If the ascii value is less than 65 or is between 90 and 97 
            // then it is not a character in the alphabet

            outputArrayWords.push(inputArrayWords[i])
            continue;
        }

        if (inputArrayWords[i] === "") {

            outputArrayWords.push("");
            continue;
        }

        inputCharactersOfWord = inputArrayWords[i].split("") // ["H", "e", "l", "l", "o"]
        firstCharacterOfWord = inputCharactersOfWord[0]; // "H"

        inputCharactersOfWord[inputCharactersOfWord.length] = firstCharacterOfWord
        // Sets H as the last item: [H , e , l , l , o , H]

        outputCharacterOfWord = inputCharactersOfWord.slice(1)
        // Removes the first element of the array :3

        outputArrayWords.push(outputCharacterOfWord.join("") + "ay")
        // joins together the array of characters into a word


    }
    output = outputArrayWords.join(" ")
    return output
}

// pigIt(".   DPPuirisDb sExDEHDUyGL RETfNrZFH FrV LL iRIffUtGVHuDyCV . ! TbfmMIIhPATJmqPH IrKLfJ WDfFaYk wosl Bgid QiWnENbRwAzZzZYgbft")

// example 
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// received 
// .   PPuirisDbDay ExDEHDUyGLsay ETfNrZFHRay rVFay LLay RIffUtGVHuDyCViay . ! bfmMIIhPATJmqPHTay rKLfJIay DfFaYkWay oslway gidBay iWnENbRwAzZzZYgbftQay
// .   PPuirisDbDay ExDEHDUyGLsay ETfNrZFHRay rVFay LLay RIffUtGVHuDyCViay . ! bfmMIIhPATJmqPHTay rKLfJIay DfFaYkWay oslway gidBay iWnENbRwAzZzZYgbftQay
// expected 
// .     PPuirisDbDay ExDEHDUyGLsay ETfNrZFHRay rVFay LLay RIffUtGVHuDyCViay . ! bfmMIIhPATJmqPHTay rKLfJIay DfFaYkWay oslway gidBay iWnENbRwAzZzZYgbftQay