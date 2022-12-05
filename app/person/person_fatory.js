const Person_Data = require('./person_data')
const obj_person = new Person_Data;

function verify_person (){
    const { person_paulo } = obj_person;    
    if(!person_paulo) {
        return null
    }
    return person_paulo;
}
module.exports = verify_person;