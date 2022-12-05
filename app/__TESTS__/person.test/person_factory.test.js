const verify_person = require('../../person/person_fatory')


const obj_test = {
    nameFull: "Paulo Dantas",
    email: "paulodantas@gmail.com",
    birthDay: new Date( 1980, 5, 14)
}

describe("Should test retorn null", () =>{
    // it("if value is invalid, should return null", ()=>{
    //     expect(verify_person()).toBeNull()
    // }),
    it("if value is valid, should return objeto", () => {
        expect(verify_person()).toEqual(obj_test)
    })
})