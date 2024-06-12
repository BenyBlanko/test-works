let val = 11;
let result = "";

function outputData(val) {
    for (let i = 1; i <= val; i++) {
        let num = 0;
        for (let x = 1; x <= i; x++) {
            num += 1;
        }
        result += num;
    }
    console.log(`Результат роботи функції - ${result}`);
}

outputData(val);
