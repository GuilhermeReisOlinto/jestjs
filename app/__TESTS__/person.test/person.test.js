const Person_Data = require('../../person/person_data');
const person = new Person_Data;

const obj_test = {
    nameFull: "Paulo Dantas",
    email: "paulodantas@gmail.com",
    birthDay: new Date( 1980, 5, 14)
}

describe("shoult check if object is equals", () => {
    it("shoult check object paulo is equals object test", () => {
        expect(person.person_paulo).toEqual(obj_test)
    })
})

