/**
 * Задача 1
 * Напишите функцию `f`, которая возвращает куб числа. 
 * Число передается параметром. Данная функция должна обязательно 
 * содержать проверку входного параметра, потому что принимать она 
 * может только число.
*/

/*
f(2); // 8
f('Content'); // Error: parameter type is not a Number
*/
function f(num) {
    if (typeof num !== 'number') throw new Error('Parameter type is not a Number');
    return num * num * num;
}

console.log(f(3));
console.log(f('Content'));
