
// 🔗описание
// Создайте функцию боя, которая принимает текущее количество здоровья игрока и величину полученного урона и возвращает новое количество здоровья игрока. Количество здоровья не может быть меньше 0.
A
// 🤞test
// it("should work for some example tests", function () {
//     Test.assertEquals(combat(100, 5), 95);
//     Test.assertEquals(combat(92, 8), 84);
//     Test.assertEquals(combat(20, 30), 0, "Health cannot go below 0");

// ✅решение
function combat(health, damage) {
    let newHealth = health - damage;

    if (newHealth < 0) {
        return 0;
    }

    return newHealth;
}