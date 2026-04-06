
// 🔗описание
// Реализуйте функцию суммирования квадратов таким образом, чтобы она возводила в квадрат каждое переданное ей число, а затем суммировала полученные результаты.
//
// Например, для [1, 2, 2] она должна вернуть 9, поскольку
//


// 🤞test
// assert.strictEqual(squareSum([1,2]), 5);
//     assert.strictEqual(squareSum([0, 3, 4, 5]), 50);
//     assert.strictEqual(squareSum([]), 0);

// ✅решение
function squareSum(numbers){
    // const el1 = numbers[0]
    // const squareEl1 = Math.pow(el1, 2)
    //
    // const el2 = numbers[1]
    // const squareEl2 = el2 ** 2
    //
    // console.log('squareEl1: ', squareEl1,)
    // console.log('squareEl2: ', squareEl2,)

    let sum = 0

    for (let i = 0; i < numbers.length; i++) {
        const el = numbers[i]
        const squareEl = el ** 2
        // console.log('iteration: ', i, 'squareEl', squareEl)
        sum = sum + squareEl
    }

    return sum
}

console.log(squareSum([1,2]));
console.log(squareSum([0, 3, 4, 5]));
console.log(squareSum([]));