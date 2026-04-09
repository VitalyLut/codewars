
// 🔗описание
// Наступил конец учебного года — решающий момент, когда вы составляете табели успеваемости. Нужно подсчитать средние оценки. Все ученики приходят к вам и просят подсчитать их среднюю оценку. Это легко! Вам нужно всего лишь написать скрипт.
//
// Выведите среднее значение заданного массива, округленное в меньшую сторону до ближайшего целого числа.
//
// Массив никогда не будет пустым.

// 🤞test
// Test.assertEquals(getAverage([2,2,2,2]),2);
// Test.assertEquals(getAverage([1,2,3,4,5,]),3);
// Test.assertEquals(getAverage([1,1,1,1,1,1,1,2]),1);


// ✅решение
function getAverage(marks){
    let sum = 0;

    for (let i = 0;  i < marks.length; i++) {
        sum += marks[i];
    }

    return Math.floor(sum / marks.length);//TODO : calculate the downward rounded average of the marks array
}


