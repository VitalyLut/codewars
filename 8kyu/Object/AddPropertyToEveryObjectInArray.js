
// 🔗описание
// Ваша задача — добавить новое свойство usersAnswer ко всем объектам в массиве questions.
// Значение usersAnswer должно быть установлено равным null. Решение должно работать с массивом
// любой длины.
//
// Например:
//
// var questions = [{
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
//     corAnswer: 0
// }];

// После добавления свойства результат должен быть следующим:
//
//var questions = [{
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
// corAnswer: 0,
//     usersAnswer: null
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//         choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
//         corAnswer: 0,
//         usersAnswer: null
// }];
// Массив вопросов уже определён для вас и отличается от того, что приведён в примере.

// 🤞test
// const Test = require('@codewars/test-compat');
//
// describe("Tests", () => {
//   it("test", () => {
// Test.expect(questions[0].usersAnswer === null);
//   });
// });


// ✅решение
for (let i = 0; i < questions.length; i++) {
        questions[i].usersAnswer = null
    }


