
// 🔗описание
// При заданном массиве целых чисел ваше решение должно найти наименьшее целое число.
//
// Например:
//
// При массиве [34, 15, 88, 2] ваше решение должно вернуть 2.
// При массиве [34, -345, -1, 100] ваше решение должно вернуть -345.
// Для целей данного задания можно предположить, что заданный массив не будет пустым.

// 🤞test
// assert.strictEqual(findSmallestInt([78,56,232,12,8]),8, `findSmallestInt([78,56,232,12,8])`);
//     assert.strictEqual(findSmallestInt([78,56,232,12,18]),12, `findSmallestInt([78,56,232,12,18])`);
//     assert.strictEqual(findSmallestInt([78,56,232,412,228]),56, `findSmallestInt([78,56,232,412,228])`);
//     assert.strictEqual(findSmallestInt([78,56,232,12,0]),0, `findSmallestInt([78,56,232,12,0])`);
//     assert.strictEqual(findSmallestInt([1,56,232,12,8]),1, `findSmallestInt([1,56,232,12,8])`);


// ✅решение
function findSmallestInt(arr) {
    let min = arr[0]
    for (let i = 1;  i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }//your code here
    return min;
}


