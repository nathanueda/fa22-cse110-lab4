for (let car in statistics) {
    if (car[0] == 'r' || statistics[car] % 2 != 0) {
        console.log(statistics[car]);
    }
}