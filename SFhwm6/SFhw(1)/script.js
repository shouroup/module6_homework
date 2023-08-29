function countNumbers(array) {
    let evenCount = 0;
    let oddCount = 0;
    let zeroCount = 0;

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number' && !isNaN(array[i])) {
            if (array[i] === 0) {
                zeroCount++;
            } else if (array[i] % 2 === 0) {
                evenCount++;
            } else {
                oddCount++;
            }
        }
    }

    console.log(`Чётные: ${evenCount}`);
    console.log(`Нечётные: ${oddCount}`);
    console.log(`Нули: ${zeroCount}`);
}

const inputArray = [1, 0, 2, 'hello', 3, null, 4, 5];
countNumbers(inputArray);