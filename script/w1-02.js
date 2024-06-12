let val = Number.MAX_VALUE;
let listPrimeNum = [];
let sumPrimeNum = 0;

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return num !== 1;
}

function printPrimes(max) {
    for (let i = 2; i <= max; i++) {
        if (isPrime(i)) {
            listPrimeNum.push(i);
            if (listPrimeNum.length == 5) {
                break;
            }
        }
    }
    listPrimeNum.map((i) => {
        sumPrimeNum += i;
    });

    console.log(`Список простих чисел - ${listPrimeNum}`);
    console.log(`Сумма простих чисел - ${sumPrimeNum}`);
}

printPrimes(val);
