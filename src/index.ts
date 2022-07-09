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
