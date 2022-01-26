/**
 * Задача 2
 * Создать имплементацию функции `filter`, логика работы такая же как и у родного метода.
 * Функция должна содержать проверки:
 * - Первый параметр обязателен и может принимать только массив
 * - Второй параметр обязателен и может принимать только функцию
 */

function filter(array, callback) {
    if (!Array.isArray(array)) {
        throw new TypeError(array + ' is not an Array');
    }

    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }
    const result = [];
    for (let index = 0; index < array.length; index++) {
        if (callback(array[index], index, array)) {
            result.push(array[index]);
        }
    }
    return result;
}

const arr = [0, 1, -1, 2, -2];

console.log(filter(arr, function (item, i, arr) {
    const result = item > 0;
    console.log(item, i, arr, result);
    return result;
}));
