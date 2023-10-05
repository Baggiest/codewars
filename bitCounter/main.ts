function bitCounter(n) {

    let theArray: string[] = n.toString(2).toString().split("")
    let i: number

    let result = theArray.filter((x) => {
        if (x === "1") {
            return "1"
        }
    })

    console.log(result.length)
}

bitCounter(16)