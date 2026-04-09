
// 🔗описание
// Допишите решение так, чтобы оно меняло порядок символов в переданной строке на обратный.
//
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// 🤞test
//  it("Testing for fixed tests", () => {
//     assert.strictEqual(solution('world'), 'dlrow');
//     assert.strictEqual(solution('hello'), 'olleh');
//     assert.strictEqual(solution(''), '');
//     assert.strictEqual(solution('h'), 'h');


// ✅решение
function solution(str){
    let strRev = ""
    for (let i = str.length-1; i >= 0; i--) {
        strRev += str[i];
    }
    return strRev
}


