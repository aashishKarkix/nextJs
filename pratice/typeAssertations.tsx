let guessTheType: any = "hello"
let strLength: number = (guessTheType as string).length;

console.log("strLength: ", strLength);

guessTheType = guessTheType as string;
console.log("value: ",guessTheType);
