/**
 * Задача 4
 * Создать имплементацию функции `some`, логика работы такая же как и у родного метода.
 * Функция должна содержать проверки:
 * - Первый параметр обязателен и может принимать только массив
 * - Второй параметр обязателен и может принимать только функцию 
 */

function some(array, callback) {
    if (!Array.isArray(array)) {
        throw new TypeError(array + ' is not an Array');
    }

    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    for (let index = 0; index < array.length; index++) {
        if (callback(array[index], index, array)) {
            return true;
        }
    }

    return false;
}

const arr = [1, 2, 3];
console.log(some(arr, function (item) {
    return item === 2;
})); // true

console.log(some(arr, function (item) {
    return item === -2;
})); // false
