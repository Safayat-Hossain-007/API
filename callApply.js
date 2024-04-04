const normalPerson ={
    firstName : 'Rahim',
    lastName : 'Uddin',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName+" "+this.lastName);
    },
    chargeBill:  function(amount,tips,tax){
        console.log(this);
        this.salary = this.salary - amount-tax-tips;
        return this.salary;
    }
}
//normalPerson.chargeBill(1000);
//console.log(normalPerson.salary);
//console.log(normalPerson.firstName);

const heroPerson = {
    firstName : 'Hero',
    lastName : 'Balam',
    salary : 25000,
}

const firendlyPerson = {
    firstName : 'Hero',
    lastName : 'golam',
    salary : 25000
}

//binding objects

// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(2000);
// heroChargeBill(3000);
// console.log(heroPerson.salary);
// console.log(normalPerson.salary);


// const firendlyChargeBill = normalPerson.chargeBill.bind(firendlyPerson);
// firendlyChargeBill(1500);
// console.log(firendlyPerson.salary);


//calling the object function use the comma seperation
// normalPerson.chargeBill.call(heroPerson,900,500,10);
// normalPerson.chargeBill.call(heroPerson,799,300,30);
// console.log(heroPerson.salary);

// normalPerson.chargeBill.call(firendlyPerson,1000,10,10);
// console.log(firendlyPerson.salary);

//apply function uses the set of array
normalPerson.chargeBill.apply(heroPerson,[1000,10,10]);
console.log(heroPerson.salary);
// normalPerson.chargeBill();

//normalPerson.chargeBill();
// const heroBillCharge  = normalPerson.chargeBill.bind(heroPerson)
// heroBillCharge(2000);
// heroBillCharge



// normalPerson.chargeBill(150);
// normalPerson.chargeBill(3000);
// console.log(normalPerson.salary); 