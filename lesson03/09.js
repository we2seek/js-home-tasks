/**
 * Додавання двох масивів "у стовпчик"
 * @param {*} a Доданок 1
 * @param {*} b Доданок 2
 * @returns Масив, який є результатов додавання
 */
function solution(a, b) {
    const result = [];
    let reminder = 0;
    while (a.length && b.length) {
        const itemA = a.pop();
        const itemB = b.pop();
        const sum = itemA + itemB;
        result.unshift(sum % 10 + reminder);
        reminder = Math.floor(sum / 10);
    }

    const rest = a.length ? a : b;
    while (rest.length) {
        const item = rest.pop();
        const sum = item + reminder;
        result.unshift(sum % 10);
        reminder = Math.floor(sum / 10);
    }

    if (reminder) {
        result.unshift(reminder);
    }

    return result;
}

console.log(solution([2, 4, 3], [5, 6, 4])); // [8, 0, 7]
console.log(solution([1, 4, 5], [4, 4, 2])); // [5, 8, 7]
console.log(solution([1, 1, 1], [])); // [1, 1, 1]
console.log(solution([], [9, 9, 9])); // [9, 9, 9]
console.log(solution([9,9,9], [9,9,9])); // [1, 9, 9, 8]
console.log(solution([], [])); // []
console.log(solution([], [0])); // [0]
console.log(solution([0], [0])); // [0]
console.log(solution([1, 1, 1, 1, 1, 1, 1, 1], [1, 0])); // [1, 1, 1, 1, 1, 1, 2, 1]
console.log(solution([9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9], [1])); 
// [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
