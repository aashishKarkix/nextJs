class Animal {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    move(distance: number = 0) {
        console.log(`${this.name} move distance: ${distance}m`);
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    bark() {
        console.log(`${this.name} barks`);
    }
}

const dog = new Dog("sparky");
dog.bark();
dog.move(10);