/**
 * Задача 8
 * Напишите функцию `f`. Данная функция принимает один параметр: одноуровневый или многоуровневый массив. 
 * Возвращает данная функция сумму всех элементов на всех уровнях.
 * Обратите внимание что функция должна возвращать число 0, если при проходе всех уровней не было найдено 
 * ни одного числа. Функция должна содержать проверки: 
 * - Первый параметр обязателен и может принимать только массив
 * - Генерировать ошибку если на каком то уровне было найдено не число и не массив
 */
function f(array) {
    if (!Array.isArray(array)) {
        throw new TypeError(array + ' is not an Array');
    }

    const flat = array.flat(1024);
    const hasInvalidItems = flat.some(function (item) {
        return typeof item !== 'number' || !Array.isArray(array);
    });
    if (hasInvalidItems) {
        throw new TypeError('All items must be of type array or number');
    }

    return flat.reduce(function (acc, item) { return acc + item; }, 0);
}

const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
console.log(f(arr)); // 12
const arr2 = [[[[[1, 2]]]]];
console.log(f(arr2)); // 3
const arr3 = [[[[[1, 2]]], 2], 1];
console.log(f(arr3)); // 6
const arr4 = [[[[[]]]]];
console.log(f(arr4)); // 0
const arr5 = [[[[[], 3]]]];
console.log(f(arr5)); // 3

const arr6 = [[[1,2], 3], ['6'], [7]]
console.log(f(arr6)); // TypeError