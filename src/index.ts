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

// interface
interface UserInterface {
  readonly id: number
  name: string
  age?: number
}

const user1: UserInterface = {
  id: 1,
  name: 'John'
}

console.log(user1);

// function interface
interface Mathfunc {
  (x: number, y: number): number
}

const add: Mathfunc = (x: number, y: number): number => x + y
const sub: Mathfunc = (x: number, y: number): number => x - y

console.log(add(1,2));
console.log(sub(1,2));


// class
interface PersonInterface {
  id: number
  name: string
  register(): string
}
class Person implements PersonInterface {
  id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }

  register() {
    return `${this.name} is now registered`
  }
}

const brad = new Person(1, 'brad')
const mike = new Person(2, 'mike')

console.log(brad, mike);
console.log(brad.register());

// extending class
class Employee extends Person {
  position: string

  constructor(id: number, name: string, position: string) {
    super(id, name)
    this.position = position
  }
}

const emp = new Employee(3, 'Shawn', 'Developer')

console.log(emp.register());
console.log(emp.position);

// generics
function test<T>(arg: T): T {
  return arg
}

console.log(test(1));
console.log(test("aaa"));
