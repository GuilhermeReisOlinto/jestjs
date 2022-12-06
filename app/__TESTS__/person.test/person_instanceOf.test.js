const person_data = require('../../person/person_obj');
const person = require ('../../person/person')
const obj_test = {
    nameFull: "Paulo Dantas",
    email: "paulodantas@gmail.com",
    birthDay: new Date( 1980, 5, 14)
}
describe("Factory of Persons", ()=> {
    it("passed a object with values, it should return a new object", () =>{
        expect(person_data(obj_test)).toBeInstanceOf(person)
    })    
}) 