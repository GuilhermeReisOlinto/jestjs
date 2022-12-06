module.exports = class Grades_studant{
    constructor(nota1, nota2){
        this.nota1 = nota1;
        this.nota2 = nota2;
    }

    calc_average(nota1, nota2){
        const average = (nota1 + nota2) / 2;

        if(average != null){
            if(average >= 6){ 
                return average
            }else if(average < 6) {
                return average
            }
        } else{
            return average;    
        }    
    }
}