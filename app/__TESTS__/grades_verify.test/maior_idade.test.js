const Verifica_idade = require('../../grades_verify/maior_idade')
const idade = new Verifica_idade;

describe('Vai verificar se a pessoa é maior de idade', ()=> {
    it('Se maior de 18 retornara true', () => {
        expect(idade.verifica_idade(18)).toBeTruthy()
    }),
    it('Se menor de 18 anos retorna false', ()=>{
        expect(idade.verifica_idade(17)).toBeFalsy()
    })
})