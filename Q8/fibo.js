const num = parseInt(prompt('Enter the number of terms to print: '));
let num1 = 0, num2 = 1, nextTerm;

document.write('Fibonacci Series:');

for (let i = 1; i <= num; i++) {
    document.write(num1+" ,");
    nextTerm = num1 + num2;
    num1 = num2;
    num2 = nextTerm;
}