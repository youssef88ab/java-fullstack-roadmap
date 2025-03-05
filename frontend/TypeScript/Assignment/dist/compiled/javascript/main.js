"use strict";
function calculate(numOne, numTwo) {
    return numOne + numTwo;
}
console.log(calculate(10, 20)); // 30
// console.log(calculate("10", "20")); // We Don't Need This To Work
console.log(calculate(+true, +true)); // 2
function printInfo(valueOne, valueTwo) {
    return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
}
console.log(printInfo(10, 20)); // Value One Is 10, Value Two Is 20
console.log(printInfo("10", "20")); // Value One Is "10", Value Two Is "20"
// console.log(printInfo(true, [1, 2, 3])); // We Don't Need This To Work
let arr = [10, ["Youssef", "Hamza"], "String", [true]];
function reportErrors(username, age) {
    let rank = "Professor";
    return `Username: ${username}`;
    console.log("We Will Not Reach Here");
}
console.log(reportErrors("Elzero", 40));
let nothing;
let theName = "Elzero";
function showMyDetails(a = "", b = "", c) {
    return `${a}${b}${c}`;
}
// Replace ???? With The Available Variables As Argument To Get The Result
console.log(showMyDetails(nothing, nothing, theName)); // Elzero
function showMsg(user, age, country) {
    return `${user}${age}${country}`;
}
console.log(showMsg());
console.log(showMsg("Elzero"));
console.log(showMsg("Elzero", 40));
console.log(showMsg("Elzero", "40", "Egypt"));
// Write The Function Here
function printInConsole(...Values) {
    Values.forEach((value) => console.log(`The Value Is ${value} And Type Is ${typeof value}`));
    console.log("Done");
}
// Using The Function => Do Not Edit
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));
//# sourceMappingURL=main.js.map