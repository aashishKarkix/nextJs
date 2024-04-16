let a = 5;
let b = 10;

const sum = add(a, b);
console.log("sum = " + sum);

function add(a: number, b: number): number {
    return a + b;
}
