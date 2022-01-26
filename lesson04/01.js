/**
 * Задача 1
 * Создать имплементацию функции `forEach`, логика работы такая же как и у родного метода.
 * Функция должна содержать проверки:
 * - Первый параметр обязателен и может принимать только массив
 * - Второй параметр обязателен и может принимать только функцию
 */

function forEach(array, callback) {
    if (!Array.isArray(array)) {
        throw new TypeError(array + ' is not an Array');
    }

    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    for (let index = 0; index < array.length; index++) {
        callback(array[index], index, array);
    }
}

const arr = [1, 2, 3];
forEach(arr, function (item, i, arr) {
    console.log(`item: ${item} i: ${i} arr: ${arr}`);
});