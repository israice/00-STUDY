"use strict";
(() => {
    // Вся твоя работа внутри этой функции
    let age = 30;
    let userName = "Alice";
    let isAdmin = true;
    let scores = [95, 87, 76];
    let names = ["Tom", "Jerry"];
    let person = ["Bob", 25];
    let Role;
    (function (Role) {
        Role[Role["Admin"] = 0] = "Admin";
        Role[Role["User"] = 1] = "User";
        Role[Role["Guest"] = 2] = "Guest";
    })(Role || (Role = {}));
    let myRole = Role.User;
    function greet(name) {
        return `Hello, ${name}!`;
    }
    const user1 = {
        id: 1,
        name: "Alice"
    };
    class Animal {
        name;
        constructor(name) {
            this.name = name;
        }
        speak() {
            console.log(`${this.name} makes a sound.`);
        }
    }
    const dog = new Animal("Dog");
    dog.speak();
    let userId = 123;
    userId = "abc";
    let move = "up";
    const add = (a, b) => a + b;
    let currentStatus = "pending";
})();
