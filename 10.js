/**
 * Задача 9
 * Отсортировать массив по возрастанию.
 * Внимание! Не разрашается использовать специальные методы массивов.
 */

let arr = [6, 5, 4, 3, 2, 1];
let tmp;

console.log(arr);
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j + 1] < arr[j]) {
            tmp = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = tmp;
        }
    }
}
console.log(arr);
