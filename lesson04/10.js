/**
 * Задача 10
 * Создать имплементацию функции `reverse`, которая принимает массив в качестве параметра, 
 * а возвращает массив только в обратном порядке. Функция должна содержать проверки: 
 * - Первый параметр обязателен и может принимать только массив
 * - Генерировать ошибку если был передан пустой массив
 */
function reverse(array) {
    if (!Array.isArray(array)) {
        throw new TypeError(array + ' is not an array');
    }
    if (!array.length) {
        throw new Error("Array mustn't be empty");
    }

    const result = new Array(array.length);
    for (let i = 0; i < array.length; i++) {
        result[array.length - i - 1] = array[i];
    }
    
    return result;
}

const arr = [3, 2, 1];
console.log(reverse(arr)); // [1,2,3]
reverse([])