const person_data = require("../../person/person_obj")

describe('Checking  if the object has defined properties', () =>{
    it('if properties, should checks if exists', () => {
        expect(person_data()).toBeDefined()
    })
})