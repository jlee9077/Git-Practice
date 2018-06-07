let newArr = []
console.log("newArr: ", newArr)
console.log("typeof newArr: ", typeof newArr)

console.log('----------------------------------------------------------------')

let obj1 = {}
console.log("obj1: ", obj1)
console.log("typeof obj1: ", typeof obj1)

console.log('----------------------------------------------------------------')

let obj2 = new Object()
console.log("obj2: ", obj2)
console.log("typeof obj2: ", typeof obj2)

console.log('----------------------------------------------------------------')

let newArr2 = new Array()
console.log("newArr2: ", newArr2)
console.log("typeof newArr2: ", typeof newArr2)

console.log('----------------------------------------------------------------')

function Person(name, age) {
    // 1. {}
    // 2. this (from teacher)
    // 3. this = {
        // name: 'Gina',
        // age: 28
    // }
    // 4. return this
    // So now I have an object like:
    // this = {
        // name: 'Gina',
        // age: 28
    // }
    // this.name = name;
    this['name'] = name
    this.age = age;
}

Person.prototype.speak = function() {
    console.log("Hello, my name is ",this.name)
}

let person1 = new Person("Joe", 28)
console.log("person1: ", person1)
console.log("typeof: ", typeof person1);
person1.speak()

console.log('----------------------------------------------------------------')
console.log('Invoking Person without the "new" keyword...')
const person3 = Person('LALA', 100)
console.log("person3: ", person3);
console.log("typeof person3: ", typeof person3);

console.log('----------------------------------------------------------------')

let person2 = new Person("Jay", 28)
console.log("person2: ", person2);
console.log("typeof: ", typeof person2);
person2.speak()

console.log('----------------------------------------------------------------')

function Teacher(name, age, subject) {
    // 1. {}
    // 2. this = {} / this = new Object()
    Person.call(this, name, age)
    // this = {
        // name: 'Gina',
        // age: 28
    // }
    this.subject = 'Math'
    // this = {
        // name: 'Gina',
        // age: 28,
        // subject: 'Math'
    // }
    // 3. return this
}

let teacher1 = new Teacher('Gina', 28, 'Math')
console.log('teacher1: ', teacher1)
console.log('typeof teacher1: ', typeof teacher1)

console.log('----------------------------------------------------------------')

function Car(name, year){
    this.name = name
    this.year = year
}

console.log('----------------------------------------------------------------')

let car1 = new Car('BMW', 2016)
console.log('car1: ', car1);
console.log('typeof: ', typeof car1);

console.log('----------------------------------------------------------------')

function Honda(name, year, color) {
    Car.call(this, name, year)

    this.color = color
}

let honda1 = new Honda('Civic', 2015, 'blue')
console.log('Honda1: ', honda1)
console.log('typeof honda1: ', typeof honda1)

console.log('----------------------------------------------------------------')