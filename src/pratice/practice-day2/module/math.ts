export function add(x: number, y: number) {
    return x + y;
}

export function subtract(x: number, y: number) {
    if (x > y) {
        return x - y;
    } else {
        return y - x;
    }
}

export function multiply(x: number, y: number) {
    return x * y;
}

export function divide(x: number, y: number) {
    return x / y;
}