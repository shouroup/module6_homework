function isPrime(number) {
    if (number <= 1) {
        console.log(`${number} не является простым числом.`);
        return;
    }

    if (number > 1000) {
        console.log('Данные неверны. Введите число до 1000.');
        return;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            console.log(`${number} не является простым числом.`);
            return;
        }
    }

    console.log(`${number} - простое число.`);
}