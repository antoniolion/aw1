// JavaScript Oddities Demo with Explanations

// 1. Type coercion oddities
console.log('1' + 1);       // "11" -> number is coerced to string and concatenated
console.log('1' - 1);       // 0 -> string is coerced to number for subtraction
console.log([] + []);       // "" -> empty arrays are coerced to empty strings
console.log([] + {});       // "[object Object]" -> array is "" + object converts to string
console.log({} + []);       // 0 -> ambiguous parsing, {} interpreted as code block
[] == ![]; // -> true   The abstract equality operator converts both sides to numbers to compare them, and both sides become the number 0 for different reasons.
//  Arrays are truthy, so on the right, the opposite of a truthy value is false, which is then coerced to 0.
//  On the left, however, an empty array is coerced to a number without becoming a boolean first, and empty arrays are coerced to 0, despite being truthy.
//+[] == +![];
//0 == +false;
//0 == 0;
//true;

true == []; // -> false
true == ![]; // -> false

// According to the specification

true == []; // -> false

toNumber(true); // -> 1
toNumber([]); // -> 0

1 == 0; // -> false

true == ![]; // -> false

![]; // -> false

true == false; // -> false

false == []; // -> true
false == ![]; // -> true

// According to the specification

false == []; // -> true

toNumber(false); // -> 0
toNumber([]); // -> 0

0 == 0; // -> true

false == ![]; // -> true

![]; // -> false

false == false; // -> true




// 2. Comparisons
console.log(0 == '');        // true -> '' coerced to 0 for loose equality
console.log(0 == []);        // true -> [] coerced to 0
console.log(false == '0');   // true -> '0' coerced to 0, false to 0

// 3. NaN quirks
console.log(NaN === NaN);    // false -> NaN is not equal to itself
console.log(Number('foo'));  // NaN -> cannot convert "foo" to number

// 4. Floating point precision
console.log(0.1 + 0.2 === 0.3); // false -> floating point rounding errors

// 5. Hoisting
console.log(hoistVar);       // undefined -> var is hoisted but not assigned
var hoistVar = 5;

// console.log(hoistLet);    // ReferenceError: Cannot access 'hoistLet' before initialization
let hoistLet = 10;           // let is not hoisted like var

// 6. Function vs block scope
function testScope() {
    if (true) {
        var x = 1;         // function-scoped because here is used var, that exploit hoisting at function level
        let y = 2;         // block-scoped
    }
    console.log(x); // 1
    // console.log(y); // ReferenceError since y is oytside of its scope
}
testScope();

// 7. `this` oddities
console.log(this);           // global object (window in browsers)
function f() { return this; }
console.log(f());            // global object (non-strict mode)
(function() { 'use strict'; console.log(this); })(); // undefined in strict mode

// 8. Array quirks
console.log(Array(3));       // [ <3 empty items> ] -> sparse array of length 3
console.log(Array(3).map((_, i) => i)); // [ <3 empty items> ] -> map ignores empty slots
console.log([,,].length);    // 2 -> two empty slots, still counted in length

// 9. Typeof surprises
console.log(typeof null);    // "object" -> historical bug in JS
console.log(typeof NaN);     // "number" -> special case for NaN

// 10. Infinity and -Infinity
console.log(1 / 0);          // Infinity
console.log(-1 / 0);         // -Infinity

// 11. Object property quirks
const obj = { a: 1, b: 2 };
console.log(obj.hasOwnProperty('toString')); // false -> not own property
console.log('toString' in obj);             // true -> inherited from prototype

// 12. Weird equality
console.log([] == ![]);       // true -> [] coerced to false, ![] is false
console.log([1] + [2]);       // "12" -> array to string concatenation

// 13. Parsing oddities
console.log(parseInt('08'));  // 8 -> leading zeros no longer treated as octal in modern JS
console.log(parseFloat('3.14abc')); // 3.14 -> stops parsing at first invalid char

// 14. Symbols uniqueness
const sym1 = Symbol('foo');
const sym2 = Symbol('foo');
console.log(sym1 === sym2);   // false -> each symbol is unique

// 15. Logical OR / AND short circuits
console.log(null || 0 || '' || 'hello'); // "hello" -> first truthy value returned
console.log('hi' && 0 && 'bye');         // 0 -> first falsy value returned

// 16. Deleting non-configurable properties
const obj2 = Object.defineProperty({}, 'prop', { value: 42, configurable: false });
console.log(delete obj2.prop); // false -> cannot delete non-configurable property

// 17. JSON quirks
console.log(JSON.stringify({ a: undefined })); // "{}" -> undefined properties omitted
console.log(JSON.stringify([undefined]));      // "[null]" -> array element undefined becomes null

// 18. Immediately Invoked Function Expression (IIFE)
(function(i){ console.log('IIFE', i); })(42); // executes immediately with passed argument

// Small usage example
console.log('All oddities executed successfully!');
!!"false" == !!"true"; // -> true
!!"false" === !!"true"; // -> true
// true is 'truthy' and represented by value 1 (number), 'true' in string form is NaN.
true == "true"; // -> false
false == "false"; // -> false

// 'false' is not the empty string, so it's a truthy value
!!"false"; // -> true
!!"true"; // -> true
// Expression 1: 1 > 2 > 3
// Step-by-step explanation:
// 1. 1 > 2 evaluates to false.
// 2. In JavaScript, false is converted to 0 in numeric context.
// 3. Then 0 > 3 is evaluated, which is false.
console.log("1 > 2 > 3 =", 1 > 2 > 3); // Output: false

// Expression 2: 3 < 2 < 1
// Step-by-step explanation:
// 1. 3 < 2 evaluates to false.
// 2. false is converted to 0 in numeric context.
// 3. Then 0 < 1 is evaluated, which is true.
console.log("3 < 2 < 1 =", 3 < 2 < 1); // Output: true



"b" + "a" + (+"a") + "a"; // -> 'baNaNa' just because the +"string" is interpreted as unary operator , that converts anything to a number

let str1 = "12";
let num = +str1;
console.log(num); // 12
console.log(typeof num); // "number"

let str2 = +"Geeks";
console.log(str2); // NaN

let str11 = "12";
let num1 = -str11;
console.log(num1); // -12

let str21 = -"Geeks";
console.log(str21); // NaN