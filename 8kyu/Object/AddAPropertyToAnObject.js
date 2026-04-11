
// 🔗описание
//Напишите функцию, которая добавляет в объект свойство с заданным именем.
// Должна быть возможность присвоить этому свойству новое значение.
// Если данное свойство уже существует в объекте, следует сгенерировать ошибку.

// 🤞test
//const Test = require('@codewars/test-compat');
//
// describe("addProperty", function() {
//   var obj = {};
//   before(function() {
//     obj = {};
//     addProperty(obj, "name", "Palle");
//   });

// ✅решение
function addProperty(obj, prop, value) {
    if (prop in obj) {
        throw Error
    } else {
        obj[prop] = value;
    }// Add your code here
}

