/**
 * Задача 8
 * Дан массив с числами `[1, 2, 3]`. Создайте функцию `f`, которая принимает данный массив в 
 * качестве параметров, а затем последовательно выводит на экран его элементы. Обязательно 
 * нужно использовать рекурсию. Использовать цикл запрещено. Данная функция должна 
 * обязательно содержать проверку входного параметра, потому что принимать она может только 
 * не пустой массив.
 *
 * Возможно вам понадобится метод [splice](https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).
 */

/*
f([1,2,3]);
// 1
// 2
// 3
f(1,2,3) // Error: parameter type should be an array
f('Content') // Error: parameter type should be an array
f([]) // Error: parameter can't be an empty
*/


/**
 * Проверка входящих параметров
 */
function throwOnInvalidInput(arr) {
    if (!(arr instanceof Array)) throw Error('parameter type should be an array');
    if (!arr.length) throw new Error('parameter can\'t be an empty array');
}

/**
 * Вариант 1
 */
function f_v1(arr) {
    throwOnInvalidInput(arr);
    const a = arr.splice(1);
    console.log(arr[0]);
    try {
        f_v1(a);
    } catch (ignored) {
    }
}

/**
 * Вариант 2
 */
function f_v2(arr) {
    throwOnInvalidInput(arr);
    console.log(arr.shift());
    try {
        f_v2(arr);
    } catch (ignored) {
    }
}

f_v1([1, 2, 3]);
// f_v1(1, 2, 3);
// f_v1('Content');
// f_v1([]);

// f_v2([1, 2, 3]);
// f_v2(1, 2, 3);
// f_v2('Content');
// f_v2([]);