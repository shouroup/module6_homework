function printNumbersInterval(start, end) {
    let current = start;

    const interval = setInterval(() => {
        console.log(current);
        if (current === end) {
            clearInterval(interval);
        }
        current++;
    }, 1000);
}