/**
 * Задача 6
 * Сделайте функцию `isEven()`, которая параметром принимает целое число и проверяет: 
 * чётное оно или нет. Если чётное — функция возвращает `true`, если нечётное — `false`. 
 * Данная функция должна обязательно содержать проверку входного параметра, потому что 
 * принимать она может только число.
 * Чётные числа могут делится на 2 без остатка.
 */

function isEven(number) {
    if (typeof number !== 'number') throw Error(`parameter '${number}' is not a Number`);
    return (number !== 0) && (number % 2 === 0);
}

console.log(isEven(0)); // false
console.log(isEven(3)); // false
console.log(isEven(4)); // true
console.log(isEven('Content')); // Error: parameter type is not a Number
