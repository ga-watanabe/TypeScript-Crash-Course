"use strict";
let id = 5;
console.log("ID: ", id);
// enum
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 10] = "up";
    Direction[Direction["down"] = 11] = "down";
    Direction[Direction["right"] = 12] = "right";
    Direction[Direction["left"] = 13] = "left";
})(Direction || (Direction = {}));
console.log(Direction.down);
const user = {
    id: 1,
    name: 'John'
};
//type assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
// function
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 3));
function log(message) {
    console.log(message);
}
log(1);
log("aaa");
const user1 = {
    id: 1,
    name: 'John'
};
console.log(user1);
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
console.log(add(1, 2));
console.log(sub(1, 2));
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, 'brad');
const mike = new Person(2, 'mike');
console.log(brad, mike);
console.log(brad.register());
// extending class
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Shawn', 'Developer');
console.log(emp.register());
console.log(emp.position);
// generics
function test(arg) {
    return arg;
}
console.log(test(1));
console.log(test("aaa"));
