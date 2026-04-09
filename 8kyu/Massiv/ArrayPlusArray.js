
// 🔗описание
// Я новичок в программировании и хочу вычислить сумму двух массивов... Точнее, сумму всех их элементов. Буду благодарен за помощь.
//
// P.S. Каждый массив содержит только целые числа. Результат тоже должен быть числом.

// 🤞test
// it("Testing for fixed tests", () => {
//     assert.strictEqual(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
//     assert.strictEqual(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
//     assert.strictEqual(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
//     assert.strictEqual(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);


// ✅решение
function arrayPlusArray(arr1, arr2) {
    let sum = 0;
    for (let i = 0;  i < arr1.length; i++) {
        sum += arr1[i];
        }
    for (let i = 0;  i < arr2.length; i++) {
        sum += arr2[i];
    }
    return sum; //something went wrong
}


