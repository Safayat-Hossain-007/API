class Person{
    constructor(FirstName,LastName,salary){
        this.FirstName = this.FirstName;
        this.LastName = LastName;
        this.salary = salary;

    }
}

const heroPerson = new Person('Hero','balam',2000);
console.log(heroPerson);
const firendlyPerson = new Person('safayat','hossain',2000);
console.log(firendlyPerson);


//oldway to create a class

function Person1(firstName,lastName,salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}
const oldSaf = new Person1("safayat","hossain",82);
console.log(oldSaf);
