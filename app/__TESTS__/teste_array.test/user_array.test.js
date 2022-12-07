const users = require('../../users/users_array')

describe('Checking length of items of arrays',() => {
    it('should check if array has 3 items', () =>{
        expect(users).toHaveLength(3);
    }),
    it('should check if item the array has 4 characters wide', () => {
        expect(users[2]).toHaveLength(4)
    }),
    it('should check if the array contains the user Dara ', ()=> {
        expect(users).toContain('Dara')
    }),
    it('should check if item the array does not Julio', () => {
        expect(users).not.toContain('Julio')
    })

})