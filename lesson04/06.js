/**
 * Задача 6
 * Создать имплементацию функции `reduceRight`, логика работы такая же как и у родного метода.
 * Функция должна содержать проверки:
 * - Первый параметр обязателен и может принимать только массив
 * - Второй параметр обязателен и может принимать только функцию
 * - Третий параметр обязателен и может принимать только строку или число
 */
function reduceRight(array, callback, result) {
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

    for (let i = array.length - 1; i >= 0; i--) {
        result = callback(result, array[i], i, array);
    }

    return result;
}

const arr = [1, 2, 3];
const accInitial = '';
const result = reduceRight(arr, function (acc, item) {
    return acc + '' + item;
}, accInitial);

console.log(result);