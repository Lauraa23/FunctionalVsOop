import { expect, test } from "vitest"
import { bark, createDog } from "../src/functional"


test('should create a dog', () => {
    expect(createDog('Dante', 5)).toMatchObject({name:'Dante', age:5, clase: "mamíferos"})
})

test('should a dog bark', () => {
    const dante = createDog('Dante', 5)
    expect(bark(dante)).toBe('Dante is barking')
})