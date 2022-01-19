/***
 * Задача 4
 * Сделайте функцию `f`, которая принимает параметром число от 1 до 7, а затем возвращает 
 * день недели на русском языке. Данная функция должна обязательно содержать проверку 
 * входного параметра, потому что принимать она может только числа от 1 до 7.
 */
const daysOfWeek = [
    '',
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
];

function f(dayIndex) {
    if (typeof dayIndex !== 'number') throw Error('parameter type is not a number');
    if (dayIndex < 1 || dayIndex > 7) throw Error('parameter should be in the range of 1 to 7');

    return daysOfWeek[dayIndex];
}

console.log(f(1));      // Воскресенье
console.log(f(2));      // Понедельник
console.log(f(8));      // Error: parameter should be in the range of 1 to 7
console.log(f('1'));    // Error: parameter type is not a Number
