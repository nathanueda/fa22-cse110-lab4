function everySecond() {
    let d = new Date();
    let time = d.toLocaleDateString();
    console.log(time);
}

// Infinite Loop.
setInterval(everySecond, 1000);