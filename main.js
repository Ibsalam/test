const myVar = 'Javascript is amazing';
console.log(myVar)

const line1 = 'c is fun';
const line2 = 'javascript is amazing';
const line3 = 'python is cool';

function factorial(n) {
    if (n < 0) {
        return (-1);
    }    
    if (n === 0 || isNaN(n)) {
        return (1);
    }
    return (n * factorial(n - 1));

}

const num1 = Number(process.argv[2])
const num2 = Number(process.argv[3])
const num3 = Number(process.argv[4])

console.log(num1*num2/num3);

// console.log(factorial(Number(process.argv[2])));
/*
console.log(line1);
console.log(line2);
console.log(line3);
*/