let sales: number = 123_456_789;
let course: string = "TypeScript";
let isPublished: boolean = true;
let level;

function render(document) {
    console.log(document);
}
// Arrays
let numbers: number[] = [1, 2, 3, 4, 5];
numbers[0] = 1;
numbers[1] = 2;
numbers[2] = 3;
numbers[3] = 4;
numbers[4] = 5;

numbers.forEach(n=> n.toExponential());
