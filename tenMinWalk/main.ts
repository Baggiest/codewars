function isValidWalk(walk: string[]) {

    let xAxis, yAxis
    xAxis = yAxis = 0

    for (let i in walk) {

        switch (walk[i]) {

            case "n":
                xAxis++
                break;
            case "s":
                xAxis--
                break;
            case "e":
                yAxis++
                break;
            case "w":
                yAxis--
                break;
        }
    }

    console.log({ xAxis, yAxis })

    return (xAxis === 0 && yAxis === 0) && walk.length === 10
}

isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])