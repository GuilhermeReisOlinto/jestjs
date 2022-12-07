const users_array = require('../../users/users_array')

describe('Checking items of array', () => {
    it('Should check if the array contains all the in  another array', () =>{
        var expectArray= ['Mirelly', 'Dara'];
        expect(users_array).toEqual(expect.arrayContaining(expectArray))
    })
})