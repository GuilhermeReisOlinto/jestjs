const Grades_studant = require('../../grades_verify/grades_student')
const calc  = new Grades_studant;

describe('', () => {
    it('Should check if average of the grades 8, 5', () => {
        expect(calc.calc_average(8, 5)).toBeCloseTo(6.5, 2)
    })
})