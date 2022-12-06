const Person = require("./person");

function person_data(person){
    const ezequiel = new Person (person.nameFull, person.email, person.birthDay)
    return ezequiel;
}

module.exports = person_data;