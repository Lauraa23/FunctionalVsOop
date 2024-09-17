import { expect, test } from "vitest";
import { bark, createDog, run, eat, haveBirthday } from "../src/functional";

test("should create a dog", () => {
  expect(createDog("Dante", 5)).toMatchObject({
    name: "Dante",
    age: 5,
    clase: "mamíferos",
  });
});

test("should a dog bark", () => {
  const dante = createDog("Dante", 5);
  expect(bark(dante)).toBe("Dante is barking");
});

test("should a dog run", () => {
  const dante = createDog("Dante", 5);
  expect(run(dante)).toBe("Dante is running");
});

test("should a dog eat", () => {
  const dante = createDog("Dante", 5);
  expect(eat(dante)).toBe("Dante is eating");
});

test("should a dog have a birthday and age increases", () => {
  const dante = createDog("Dante", 5);
  expect(haveBirthday(dante)).toBe(
    "Happy birthday Dante! Now you are 6 years old!"
  );
  expect(dante.age).toBe(6);
});
