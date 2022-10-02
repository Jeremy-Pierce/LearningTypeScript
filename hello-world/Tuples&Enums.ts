// Tuples
// Tuples are a way to express an array with a fixed number of elements whose types are known, but need not be the same. For example, you may want to represent a value as a pair of a string and a number:
// Declare a tuple type
let user: [string, number] = ["Jeremy", 30];
// tuples are usesful when you have two value pairs that are related to each other

// Enums 
// An enum is a way of giving more friendly names to sets of numeric values.
// enum Color {Red, Green, Blue}
// let c: Color = Color.Green;
// By default, enums begin numbering their members starting at 0. You can change this by manually setting the value of one of its members. For example, we can start the previous example at 1 instead of 0:
// enum Color {Red = 1, Green, Blue}
// let c: Color = Color.Green;
// Or, even manually set all the values in the enum:
// enum Color {Red = 1, Green = 2, Blue = 4}
// let c: Color = Color.Green;
// A handy feature of enums is that you can also go from a numeric value to the name of that value in the enum. For example, if we had the value 2 but weren’t sure what that mapped to in the Color enum above, we could look up the corresponding name:
// enum Color {Red = 1, Green, Blue}
// let colorName: string = Color[2];
// alert(colorName);  // Displays 'Green' as its value is 2 above
// The above example is a bit contrived, but enums are real handy when working with numeric values that have a friendly name we’d like to refer to later.

// const small =1;
// const medium =2;
// const large =3;
// By using const the compiler will run more optimized code
const enum Size {small =1, medium, large};
let mySize: Size = Size.small;
console.log(mySize);
