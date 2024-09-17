import { expect, test } from "vitest";
import { Dog } from "../src/oop";

test("should create a dog", () => {
  const firulais = new Dog("Firulais", 3);
  expect(firulais).toMatchObject({ name: "Firulais", age: 3 });
});

test("should dog bark", () => {
  const firulais = new Dog("Firulais", 3);
  expect(firulais.bark()).toBe("Firulais is barking");
});

test("should dog run", () => {
  const firulais = new Dog("Firulais", 3);
  expect(firulais.run()).toBe("Firulais is running");
});

test("should dog eat", () => {
  const firulais = new Dog("Firulais", 3);
  expect(firulais.eat()).toBe("Firulais is eating");
});

test("should dog have a birthday and age increases", () => {
  const firulais = new Dog("Firulais", 3);
  const birthdayMessage = firulais.haveBirthday();
  expect(firulais.age).toBe(4);
  expect(birthdayMessage).toBe(
    "Happy birthday Firulais! Now you are 4 years old!"
  ); 
});
