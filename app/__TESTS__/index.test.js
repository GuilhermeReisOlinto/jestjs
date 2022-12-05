const Calculate = require('../index');
const calc = new Calculate;


describe("Sum between in two numbers", ()=> {
  it("passed the value 1 + 2, it should return 3", ()=> {
    expect(calc.sum(1, 2)).toBe(3)  
  }),
  it("passed the value 4 + 5, it should return 9", () => {
    expect(calc.sum(4,5)).toBe(9)
  })  
});

describe("Calculate the square area of value passed", () => {
    it("passed the value 4, it should return 16", () => {
        expect(calc.areaOfSquare(4)).toBe(16)
    })
    it("passed the value 6, it should return 36", () => {
        expect(calc.areaOfSquare(6)).toBe(36)
    })
})