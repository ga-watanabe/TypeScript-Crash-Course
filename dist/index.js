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
