
// 🔗описание
// Дополните метод, принимающий булево значение и возвращающий строку «Yes» при значении true или строку «No» при значении false.


// 🤞test
// assert.strictEqual(boolToWord(true), 'Yes')
//     assert.strictEqual(boolToWord(false), 'No')

// ✅решение
function boolToWord( bool ){
    if (bool === true) {
        return 'Yes';
    } else {
        return 'No';
    }

}