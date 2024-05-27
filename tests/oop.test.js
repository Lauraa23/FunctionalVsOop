import { expect, test } from "vitest";
import { Dog } from "../src/oop";

test('should create a dog', () => {
    const firulais = new Dog('Firulais', 3)
    expect(firulais).toMatchObject({name: 'Firulais', age: 3})
})

test('should dog bark', () => { 
    const firulais = new Dog('Firulais', 3)
    expect(firulais.bark()).toBe('Firulais is barking')
})
