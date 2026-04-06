
// 🔗описание
// При заданном случайном неотрицательном числе необходимо вернуть цифры этого числа в массиве в обратном порядке.
//
// Пример (входные данные => выходные данные):
//


// 🤞test
// assert.deepEqual(digitize(35231),[1,3,2,5,3]);
//     assert.deepEqual(digitize(0),[0]);

// ✅решение
function digitize(n) {
    return String(n).split('').map(Number).reverse()
}

console.log('digitize -1: ', digitize(35231));
console.log('digitize -2: ', digitize(0));