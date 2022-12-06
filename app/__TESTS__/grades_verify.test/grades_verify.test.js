const Grades_studant = require('../../grades_verify/grades_student')
const calc  = new Grades_studant;
describe('Verify if return is true, or false', () => {
    it('When passed value n1 and n2, should return true', () =>{
        expect(calc.calc_average(8,6)).toBeTruthy()
    }),
    it('when do not passed values, should return false', () =>{
        expect(calc.calc_average()).toBeFalsy()
    })
})

