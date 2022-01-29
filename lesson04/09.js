/**
 * Задача 9
 * Сделайте функцию `arrayFill`, которая будет заполнять массив заданными значениями. 
 * Первым параметром функция принимает значение, которым заполнять массив, 
 * а вторым — сколько элементов должно быть в массиве.
 * Функция должна содержать проверки:
 * - Первый параметр обязателен и может принимать только число, строку, объект, массив
 * - Второй параметр обязателен и может принимать только число
 */
function arrayFill (value, size) {
    const vType = typeof value;
    if (vType !== 'number' && vType !== 'string' && vType !== 'object' && !Array.isArray(value)) {
        throw new TypeError(value + ' is invalid parameter');
    }
    if (typeof size !== 'number') {
        throw new TypeError(size + ' is not a number');
    }

    return new Array(size).fill(value);
}

console.log(arrayFill('x', 5)); // [x,x,x,x,x]