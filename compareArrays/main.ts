function comp(a1: number[] | null, a2: number[] | null): boolean {

    console.log({ a1, a2 })

    if (a1 === null || a2 === null) return false;

    for (let i in a2) {
        a2[i] = Math.sqrt(a2[i])
    }
    a1 = a1.sort()
    a2 = a2.sort()

    for (let i in a1) {
        if (a1[i] !== a2[i]) {
            console.log("not equal")
            return false
        }
    }

    console.log("is equal")
    return true
}

comp(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [121, 14641, 20736, 361, 25921, 361, 20736, 361]
)