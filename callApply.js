const normalPerson ={
    firstName : 'Rahim',
    lastName : 'Uddin',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName+" "+this.lastName);
    },
    chargeBill:  function(amount){
        console.log(this);
        this.salary = this.salary - amount;
        return this.salary;
    }
}
console.log(normalPerson.firstName);

const heroPerson = {
    firstName : 'Hero',
    lastName : 'Balam',
    salary : 25000
}

const firendlyPerson = {
    firstName : 'Hero',
    lastName : 'golam',
    salary : 25000
}

//normalPerson.chargeBill();
const heroBillCharge  = normalPerson.chargeBill.bind(heroPerson)
heroBillCharge(2000);
heroBillCharge



// normalPerson.chargeBill(150);
// normalPerson.chargeBill(3000);
// console.log(normalPerson.salary); 