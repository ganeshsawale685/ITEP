// Q2. Closure (2 Marks)

// a) What is Closure? (1 Mark)
//    When a inner function remember the variable of its outer function through lexical scope even after the outer function is finished.
// function outer() {
//     let x = 10;
//     return function inner() {
//         console.log(x);
//     }
// }
// const fn = outer();
// fn();


// b) What will be the output of the following code? (1 Mark)

// function outer() {
//     let x = 10;
//     return function inner() {
//         console.log(x);
//     }
// }
// const fn = outer();
// fn();


// Output : 10