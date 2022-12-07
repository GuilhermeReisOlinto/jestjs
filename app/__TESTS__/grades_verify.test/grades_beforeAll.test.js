const  Grades_studant = require('../../grades_verify/grades_student')
const grades = new Grades_studant;

var gradeOne;
var gradeTwo;


beforeAll(() => {
    gradeOne = 6;
    gradeTwo = 9; 
})

afterEach(() => {
    gradeOne = 4;
    gradeTwo = 6; 
})

afterAll(() =>{
    gradeOne = null;
    gradeTwo = null;
})

describe('Checkio ng student grades', ()=> {
    it('Should check if the average of the grades 6, 9, is greater or equal than 6', ()=>{
        expect(grades.calc_average(gradeOne, gradeTwo)).toBeGreaterThanOrEqual(6)
    }),
    it('Should check if the aveagfer of the  grades 4, 8, is less or equal than 6', () =>  {
        expect(grades.calc_average(gradeOne, gradeTwo)).toBeLessThanOrEqual(6)
    })
    // it('Should check if the aveagfer of the  grades null, is less or equal than 6', () =>  {
    //     expect(grades.calc_average(gradeOne, gradeTwo)).toBeNull()
    // })
})