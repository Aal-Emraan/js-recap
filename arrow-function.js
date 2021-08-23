function addNumber(num1, num2){
    const total = num1 + num2;
    return total;
}
console.log(addNumber(4,5));

const sum = function add(num1,num2){
    return num1 + num2;
}

console.log(sum(4,5));

// arrow function 
const add = (num1,num2) => num1 + num2;
console.log(add(4,5));

// one parameter doesn't have to use paranthesis
const multiply = x => x * 10;
console.log(multiply(10));

// 0 parameter needs to use paranthesis
const name = () => 'aal emraan';
console.log(name());

// for multiline functions have to use curley brackets
const math = (x, y) => {
    const sum = x + y;
    const minus = x - y;
    const multiply = x * y;
    const result = sum + minus / multiply;
    return result;
}

console.log(math(5,6));