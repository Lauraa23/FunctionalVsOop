//PROGRAMACIÓN FUNCIONAL

//Vamos a crear perritos
//nombre, edad
//ladrar, correr, comer, cumplir años


function createDog(name, age){
    const dog = {
        name: name,
        age: age,
        clase: "mamíferos"
    }
    return dog
}

function bark(dog){
    const bark = `${dog.name} is barking`
    return bark
}


export { createDog, bark }