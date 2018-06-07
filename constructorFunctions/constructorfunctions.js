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
    this.name = name;
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