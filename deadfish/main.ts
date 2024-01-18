function parse(data: string): number[] {

    let inputTape = data.split("")
    let resultTape: number[] = []
    let state = 0

    console.log(inputTape)

    for (let i in inputTape) {

        let command: string = inputTape[i]
        console.log(command)

        switch (command) {
            
            case "i": state++; continue;
            case "d": state--; continue;
            case "s": state *= state; continue;
            case "o": resultTape.push(state); continue;
        }
    }
    return resultTape
}

parse("iiisdoso")


// first attempt

// export function parse(data: string): number[] {

//     let inputTape = data.split("")
//     let resultTape: number[] = []
//     let state = 0

//     console.log(inputTape)

//     for (let i in inputTape) {

//         let command: string = inputTape[i]
//         console.log(command)

//         switch (command) {

//             case "i":
//                 state += 1;
//             continue;

//             case "d":
//                 state -= 1;
//             continue;

//             case "s":
//                 state *= state
//             continue;

//             case "o":
//                 resultTape.push(state)
//             continue;
//         }

//     }

//     console.log({ resultTape })
//     return resultTape
// }
