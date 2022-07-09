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
