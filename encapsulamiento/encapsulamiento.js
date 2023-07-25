class Course {

    //# is a private property notation
    #name;
   
    constructor({
      name,
      classes = []
    }) {
      this.#name = name;
      this.classes = classes;
    }
   
    get name() {
      return this.#name;
    }
   
    set name(nuevoNombrecito) {
      if (nuevoNombrecito === 'Curso Malito de Programación Básica') {
        console.error('Web... no');
      } else {
        this.#name = nuevoNombrecito;
      }
    }
   }


let newCourse = new Course({ name : "Curso para ser billonario", classes : ["Ahorrar el 10%", "Paciencia", "Invertir a Largo Plazo"]});

console.log("TEST ENCAPSULAMIENTO JAVASCRIPT")
console.log(newCourse);


// const obj = {
//     get prop() {
//       return this.__propPUTOS__;
//     },
//     set prop(value) {
//       this.__propPUTOS__ = value * 2;
//     },
//    };
   
//    obj.prop = 5;

// console.log(obj);




//ESTA FORMA CON DEFINEPROPERTY NO ME ESTA FUNCIONANDO
//REQUIERE MAS INVESTIGACION
const obj = {};

Object.defineProperty(obj, //objeto target
  'prop', //nombre propiedad
  {
    enumerable: true,
    configurable: true,
    get prop() { //getter
      return this.__prop__;
    },
    set prop(value) { //setter
      this.__prop__ = value * 2;
    },
  });
obj.prop = 12;

var atr = Object.getOwnPropertyDescriptor(obj, 'prop')
console.log(atr); 

console.log(obj);

   

//CON PROTOTYPES...

function Student(name, age, nationality) {
  this._name = name;
  this._age = age;
  this.nationality = nationality;
}

Student.prototype = {
  get name() {
    return this._name;
  },
  set name(newName) {
    this._name = newName;
  },

  get age() {
    return this._age;
  },

  set age(newAge) {
    this._age = newAge;
  },
};

let edgar = new Student("Edgar", 25, "Mexico");
edgar.name = "Juan";
edgar.age = 30
console.log(edgar);


//ENCAPSULAMIENTO CON CLOSURES

const counter = (() => {
    let privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
  
    return {
      increment: () => {
        changeBy(1);
      },
  
      decrement: () => {
        changeBy(-1);
      },
  
      value: () => {
        return privateCounter;
      }
    };
  });
  
  console.log(counter.value());  // 0.
  
  counter.increment();
  counter.increment();
  console.log(counter.value());  // 2.
  
  counter.decrement();
  console.log(counter.value());  // 1.