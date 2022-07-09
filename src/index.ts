let id: number = 5

console.log("ID: ", id);

// enum
enum Direction {
  up = 10,
  down,
  right,
  left
}

console.log(Direction.down);

// object
type User = {
  id: number,
  name: string
}

const user: User = {
  id: 1,
  name: 'John'
}

//type assertion
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number


// function
function addNum(x: number, y: number): number {
  return x + y
}

console.log(addNum(1, 3));

function log(message: number | string): void {
  console.log(message);
}

log(1)
log("aaa")
