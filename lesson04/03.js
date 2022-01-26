/**
 * Задача 3
 * Создать имплементацию функции `every`, логика работы такая же как и у родного метода.
 * Функция должна содержать проверки:
 * - Первый параметр обязателен и может принимать только массив
 * - Второй параметр обязателен и может принимать только функцию
 */

function every(array, callback) {
    if (!Array.isArray(array)) {
        throw new TypeError(array + ' is not an Array');
    }

    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    let trueCounter = 0;
    for (let index = 0; index < array.length; index++) {
        if (callback(array[index], index, array)) {
            trueCounter++;
        }
    }

    return array.length && (trueCounter === array.length);
}

console.log(every([1, 2, 3], function (item) {
    return item > 0;
})); // true

console.log(every([1, 0, 3], function (item) {
    return item > 0;
})); // false