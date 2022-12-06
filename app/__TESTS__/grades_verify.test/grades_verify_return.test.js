const Grades_studant = require('../../grades_verify/grades_student')
const calc  = new Grades_studant;
describe('Checking student grades', () => {
    it('Should check if the average of the grades 7, 6', () =>{
        expect(calc.calc_average(7, 6)).toBeGreaterThan(6);
    }),
    it('Should check if the average of the grades 6, 6 and 6 is greater then or equal to 6', () =>{
        expect(calc.calc_average(6, 6)).toBeGreaterThanOrEqual(6)
    }),
    it('should check if the average of the grades 4, 5', () => {
        expect(calc.calc_average(4, 5)).toBeLessThan(6)
    })
})

