/******** Arithmetic Operators ********/

// let x = 5;
// let y = 2;

// let result = x + y; // other operators: -, *, /, %, **
// console.log('Result is: '+result);

// let a = 10;
// a ++; // --
// console.log(a)


/******** Assignment Operators ********/

// let x = 10;
// x += 20; // -, *, /, %, **
// console.log(x);


/******** Comparison Operators ********/

// let x = 10;
// let y = 20;
// // let result = x == y;
// let result = x === y; // === check also type of values
// // !=, !==, >, <, <=, >=
// console.log(result);

/*
Ternary Operator: like if-then-else
takes 3 arguments
condition ? value/expression if true: value/expression if false
*/

// let result = x > y ? x : y;
// console.log(result);


/******** Logical Operators ********/

// let a = true;
// let b = false;

// console.log(a && b);
// console.log(a || b);
// console.log(!a);


/******** Type Operators ********/

/* 
typeof - returns the type of a variable
instanceof - returns true if an object is an instance of an object type
*/

// let firstName = 'Nihad';

// typeof firstName;
// console.log(typeof firstName);

// // let lastName = 'Nahmatli';
// let lastName = new String('Nahmatli'); // this part of oop

// console.log(lastName instanceof String);

// // let num1 = 123;
// // instead of 
// let num1 = new Number(123);
// console.log(num1 instanceof Number);


/******** Bitwise Operators ********/

// console.log('******** Bitwise Operators ********')

// let a = 1;
// let b = 2;
// console.log(a & b);
// console.log(a | b);
// console.log(3 ^ 5);
// console.log(~5);
// console.log(5 << 1);
// console.log(5 >> 1);