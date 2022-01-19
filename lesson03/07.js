/**
 * Задача 7
 * Сделайте функцию `getDivisors`, которая параметром принимает число и возвращает массив его 
 * делителей (чисел, на которое делится данное число начиная от 1 и заканчивая самим собой). 
 * Данная функция должна обязательно содержать проверку входного параметра, потому что 
 * принимать она может только число больше 0.
 */

function getDivisors(number) {
    if (typeof number !== 'number') throw Error('parameter type is not a Number');
    if (number <= 0) throw Error('parameter must be greater than 0');
    const divisors = [1];
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            divisors.push(i);
        }
    }
    divisors.push(number);

    return divisors;
}


console.log(getDivisors(12)); // [1, 2, 3, 4, 6, 12]
console.log(getDivisors(1000_000)); 
/*[
       1,      2,      4,       5,      8,
      10,     16,     20,      25,     32,
      40,     50,     64,      80,    100,
     125,    160,    200,     250,    320,
     400,    500,    625,     800,   1000,
    1250,   1600,   2000,    2500,   3125,
    4000,   5000,   6250,    8000,  10000,
   12500,  15625,  20000,   25000,  31250,
   40000,  50000,  62500,  100000, 125000,
  200000, 250000, 500000, 1000000
]*/
// console.log(getDivisors('Content')); // Error: parameter type is not a Number
// console.log(getDivisors(0)); // Error: parameter can't be a 0
