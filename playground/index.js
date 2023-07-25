class Course {
    constructor({
      name,
      classes = [],
    }) {
      this.name = name;
      this.classes = classes;
    }
  
    get name() {
      return this._name;
    }
  
    set name(nuevoNombrecito) {
  
    
      
      if (typeof nuevoNombrecito == "string" && nuevoNombrecito) {
        
        nuevoNombrecito = nuevoNombrecito.trim();
        if(nuevoNombrecito.length == 0)
    {
        return;
    }
        let a = nuevoNombrecito.split(" ");
        //console.log(a.length);
        this._name = '';
        for (let i = 0; i < a.length; i++)
        {
          //console.log(a[i]);
          this._name += (i > 0 ? " " : "") +
          a[i].charAt(0).toUpperCase() + a[i].slice(1);
        }
      }
      
    }
  }


let test = new Course({ name:"Curso para maestro Yedi",classes: []})

console.log(test);


export class Course {
    constructor({
      name,
      classes = [],
    }) {
      this.name = name;
      this.classes = classes;
    }
  
    get name() {
      return this._name;
    }
  
    set name(nuevoNombrecito) {
      if (typeof nuevoNombrecito === "string") {
        nuevoNombrecito = nuevoNombrecito.trim()
        if (nuevoNombrecito.length !== 0) {
          let words = nuevoNombrecito.split(" ")
          let nuevoNombrecitoMayusculas = words.map((word) => {
            return word[0]?.toUpperCase() + word.substring(1);
          }).join(" ")
          this._name = nuevoNombrecitoMayusculas
        }
      }
    }
  }


  export class Course {
    constructor({
      name,
      classes = [],
    }) {
      this.name = name;
      this.classes = classes;
    }
  
    get name() {
      return this._name;
    }
  
    set name(nuevoNombrecito) {
      
      
  
      if (typeof nuevoNombrecito === "string") {
        nuevoNombrecito = nuevoNombrecito.trim()  
        if (nuevoNombrecito.length == 0) {
          return;
        }
       // if (nuevoNombrecito.length !== 0) {
          let words = nuevoNombrecito.split(" ")
          let nuevoNombrecitoMayusculas = words.map((word) => {
            return word[0]?.toUpperCase() + word.substring(1);
          }).join(" ")
          this._name = nuevoNombrecitoMayusculas
        }
      //}
    }
  }