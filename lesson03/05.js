/**
 * Задача 5
 * Дан массив с числами `[1, 2, -4, 3, -9, -1, 7]`. Создайте из него новый массив, 
 * где останутся лежать только положительные числа `[1, 2, 3, 7]`. Создайте для этого 
 * вспомогательную функцию `isPositive(-3)`, которая параметром будет принимать число 
 * и возвращать true, если число положительное, и false — если отрицательное. Данная 
 * функция должна обязательно содержать проверку входного параметра, потому что 
 * принимать она может только число. 
 * Для добавление нового элемента в конец массива используйте метод push
 */

function isPositive(number) {
    return typeof number === 'number' && number > 0;
}

function filterByPredicate(arr, predicate) {
    const result = [];
    for (item of arr) {
        if (predicate(item)) {
            result.push(item);
        }
    }
    return result;
}

const source = [1, 2, -4, 3, -9, -1, 7];
const filtered = filterByPredicate(source, isPositive);
console.log(`${source} -> ${filtered}`);
