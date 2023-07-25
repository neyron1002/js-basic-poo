

//Literal Object
const testLiteral = {
    company : 'Grupo Neyron',
    nit: 900929849,
    ceo: 'Juan Manuel Pedraza',
    products: [],
    addProduct(newProduct) {
        this.products.push(newProduct);
        console.log(this.products);
    }

}

//The literal object inherit from default javascript prototype object

console.log(testLiteral);

testLiteral.products.push('Geus ISP');

console.log(testLiteral);

testLiteral.addProduct('Development to measure')

//in Literal object no can create instance, the object contain all definitions
//id requiere create instantes with the same behavior is necesary
//apply class to create own prototipe, with yours properties and methods, 
//in this case if can create instances with all properties and methdos.


//Class in JAVASCRIPT
function person(name, age) {
    this.name = name;
    this.age = age;
}

person.prototype.greeting = function () {
    console.log('Hi, Mi name is ' + this.name )
}

function child(name, age, mother, father) {
    this.mother = mother;
    this.father = father;

    this.super = person;
    this.super(name, age);
}

child.prototype = new person();
child.prototype.constructor = child;


child.prototype.greeting = function () {
    console.log(`
    Hi, mi name is ${this.name}, 
    and mi father is ${this.father.name}, 
    and mi mother is ${this.mother.name}`);
}



let father = new person('Juan Manuel', 31);
let mother = new person('Diana Carolina', 41);

let daugther = new child('Mia Sofia', 4,mother, father);




console.log(daugther);


daugther.greeting();
father.greeting();
mother.greeting();

