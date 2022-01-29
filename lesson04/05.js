/** 
 * Задача 5
 * Создать имплементацию функции `reduce`, логика работы такая же как и у родного метода.
 * Функция должна содержать проверки:
 * - Первый параметр обязателен и может принимать только массив
 * - Второй параметр обязателен и может принимать только функцию
 * - Третий параметр обязателен и может принимать только строку или число
 */
function reduce(array, callback, result) {
    if (!Array.isArray(array)) {
        throw new TypeError(array + ' is not an Array');
    }

    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    const resultType = typeof result;
    if (!(resultType === 'string' || resultType === 'number')) {
        throw new TypeError(result + ' is not a string or number');
    }

    for (let i = 0; i < array.length; i++) {
        result = callback(result, array[i], i, array);
    }

    return result;

}

const calcSum = function (acc, item) {
    return acc + item;
}
console.log(reduce([1, 2, 3], calcSum, 0)); // 6
console.log(reduce(['1', 'b', 'd'], calcSum)); // '1bd'
