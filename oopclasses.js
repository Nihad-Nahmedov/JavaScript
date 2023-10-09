// class Employee {

//     constructor (name, id) {
//         this.name = name;
//         this.id = id;
//     }

// }

// let emp1 = new Employee ('Nihad', 1002);
// let emp2 = new Employee ('Peter', 1003);

// console.log(emp1.name);
// console.log(emp1.id);

// console.log(emp2.name);
// console.log(emp2.id);


/*
********Encapsulation********
*/

// class Employee {

//     setEmpDetails (name, id, phoneNo) {
//         this.name = name;
//         this.id = id;
//         this.phoneNo = phoneNo;
//     }

//     getEmpName () {
//         return this.name;
//     }

//     getEmpId () {
//         return this.id;
//     }

//     getEmpPhoneNo () {
//         return this.phoneNo;
//     }

// }

// let emp1 = new Employee ();

// emp1.setEmpDetails ('John', 1001, 987654321);

// console.log (emp1.getEmpName());
// console.log (emp1.getEmpId());
// console.log (emp1.getEmpPhoneNo());


/*
********Inheritance********
*/

// class Car {

//     setName (name) {
//         this.name = name;
//     }

//     startEngine () {
//         console.log ('Engine started for ' + this.name);
//     }

//     stopEngine () {
//         console.log ('Engine stopped for ' + this.name);
//     }

// }

// class Toyota extends Car {
    
//     topSpeed (speed) {
//         console.log ('Top speed for ' + this.name + ' is ' + speed);
//     }
// }

// let myCar = new Toyota ();
// myCar.setName ('Camry');
// myCar.startEngine();
// myCar.stopEngine();
// myCar.topSpeed();


/*
********Polymorphism********
*/

// class Animal {

//     constructor(name) {
//         this.name = name;
//     }

//     eats() {
//         console.log (this.name + ' eats food');
//     }

// }

// class Alligators extends Animal {

//     eats() {
//         super.eats();
//         console.log (this.name + ' eats fishes');
//     }

// }

// let murphy = new Alligators('Murphy');
// murphy.eats();


/*
********Abstraction********
*/

// function Employee(name, age, baseSalary) {
//     this.name = name;
//     this.age = age;
//     this.baseSalary = baseSalary;

//     let monthlyBonus = 1000;



//     let calcFinalSalary = function() {
//         let finalSalary = baseSalary + monthlyBonus;
//         console.log ('Final salary is: ' + finalSalary);
//     }

//     this.getEmpDetails = function() {
//         console.log ('Name: ' + this.name + ' | Age: ' + this.age);
//         calcFinalSalary();
//     } 
// }

// let emp1 = new Employee('John', 30, 2000);
// emp1.getEmpDetails();