function identity<T>(value: T) {
    return value;
}

let string = identity<string>("ram");
let num = identity<number>(1);
let bool = identity<boolean>(true);
let binaryValue = identity<number>(0b101);
let octalValue = identity<number>(0o744);
let big = identity<bigint>(BigInt(10));

console.log(`string: ${string}, num: ${num}, bool: ${bool}, binaryValue: ${binaryValue}, octalValue: ${octalValue}, bigValue: ${big}`)