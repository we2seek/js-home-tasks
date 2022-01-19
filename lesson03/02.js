/**
 * Задача 2
 * Напишите функцию `f`, которая возвращает сумму всех параметров. Количество параметров 
 * может быть любым. Данная функция должна обязательно содержать проверку входных параметров, 
 * потому что принимать она может только числа.
 */

/*
f(1,2,3); // 6
f(1,1,1,1,1,1,1,1); // 8
f(1,2,'s',4); // Error: all parameters type should be a Number
*/

function f(...args) {
    let sum = 0;
    for (num of args) {
        if (typeof num !== 'number') {
            throw new Error('All parameters type should be a Number');
        }
        sum += num;
    }

    return sum;
}

console.log(f(1, 2, 3));
console.log(f(1, 1, 1, 1, 1, 1, 1, 1));
console.log(f(1, 2, 's', 4));
