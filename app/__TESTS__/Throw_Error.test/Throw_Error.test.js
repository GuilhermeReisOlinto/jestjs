const div = require('../../users/user.throw')

describe('Checking exceptions', ()=> {
    it('Should throw an exception', ()=>{
        expect(()=> {
            div(25, 0)
        }).toThrow()
    }),
    it('Should not throw an exceptions', ()=> {
        expect(()=> {
            div(25, 2)
        }).not.toThrow()
    })
})
