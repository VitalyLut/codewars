
// 🔗описание
// Если дан массив целых чисел, представленных в виде строк и чисел, верните сумму
// значений массива, как если бы все они были числами.
//
// Верните ответ в виде числа.

// 🤞test
// assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
//     assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42);
//     assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41);


// ✅решение
function sumMix(x){
    var somme = 0;
    for (i = 0; i<x.length; i++) {
        somme += Number(x[i]);
    }
    return somme;
}


