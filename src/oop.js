//PROGRAMACIÓN ORIENTADA A OBJETOS
//nombre, edad
//ladrar, correr, comer, cumplir años


export class Dog {
    constructor(name, age){
        this.name = name
        this.age = age
    }

    bark(){
        return `${this.name} is barking`
    }
}