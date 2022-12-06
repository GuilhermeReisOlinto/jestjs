module.exports = class Verifica_idade{
    constructor(idade){
        this.idade = idade;
    }

    verifica_idade(idade){
        if(idade >= 18) {
            return true;
        }else{
            return false;
        }    
    }
}