/**
 * Задача 3
 * Сделайте функцию `f`, которая отнимает от первого числа второе и делит на третье. 
 * Данная функция должна обязательно содержать проверку входных параметров, 
 * потому что принимать она может только числа.
 */
function f(...args) {
    for (arg of args) {
        if (typeof arg !== 'number') {
            throw new Error('all parameters type should be a Number');
        }
    }

    return (args[0] - args[1]) / args[2];
}

console.log(f(9,3,2));      // 3
console.log(f('s',9,3));    // Error: all parameters type should be a Number
