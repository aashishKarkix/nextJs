function factorial (number: number): number{
    if(number === 0 || number === 1){
        return 1;
    }else {
        return number * factorial(number - 1);
    }
}

console.log(factorial(10));
console.log(factorial(1000));