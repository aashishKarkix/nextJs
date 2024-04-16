function log(target: any, key: string, descriptor: PropertyDescriptor) {
 const originalMethod = descriptor.value;

 descriptor.value = function(...args: any[]) {
  console.log(`Calling ${key} with args: ${JSON.stringify(args)}`);
  const result = originalMethod.apply(this, args);
  console.log(`Method ${key} returned: ${JSON.stringify(result)}`);
  return result;
 };

 return descriptor;
}

class MyClass {
 @log
 add(x: number, y: number): number {
  return x + y;
 }
}

const instance = new MyClass();
console.log(instance.add(2, 3));
