//PROGRAMACIÓN ORIENTADA A OBJETOS
//nombre, edad
//ladrar, correr, comer, cumplir años

export class Dog {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  bark() {
    return `${this.name} is barking`;
  }

  run() {
    return `${this.name} is running`;
  }

  eat() {
    return `${this.name} is eating`;
  }

  haveBirthday() {
    this.age += 1;
    return `Happy birthday ${this.name}! Now you are ${this.age} years old!`;
  }
}
