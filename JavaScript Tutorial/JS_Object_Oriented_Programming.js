// ? OBJECT ORIENTED PROGRAMMING (OOP) IN JAVASCRIPT

// * Animal is a Parent Class (Base Class)
class Animal {

    // * Constructor runs automatically when an object is created
    constructor(name) {

        // Store the name inside the object
        this._name = name;

        console.log("Animal object is created...");
    }

    // ? Getter
    // * Allows us to access _name like a property
    get name() {
        return this._name;
    }

    // ? Setter
    // * Allows us to change _name like a property
    set name(value) {
        this._name = value;
    }

    // Instance Method
    eats() {
        console.log(`${this._name} is eating`);
    }

    // Instance Method
    jumps() {
        console.log(`${this._name} is jumping`);
    }

    // ? Static Method
    // * Called using Class Name, not object
    static info() {
        console.log("Animals are living organisms");
    }
}

// ? INHERITANCE
// * Lion inherits all properties and methods from Animal class
class Lion extends Animal {     // * Extends keyword is used to inherit from parent class

    // Constructor of Child Class
    constructor(name) {

        // * Call Parent Constructor first
        super(name);

        console.log("Lion object is created...");
    }

    // ? METHOD OVERRIDING
    // * Same method name as parent class
    eats() {

        // * Call parent's eats() method
        super.eats();

        // * Add extra behavior
        console.log(`${this._name} is eating and roaring`);
    }

    //  Lion-specific method
    roar() {
        console.log(`${this._name}: ROARRRR!`);
    }
}

// ? ABSTRACTION
// * Parent class provides a blueprint
class Vehicle {

    startEngine() {

        // * Force child classes to implement this method
        throw new Error("startEngine() must be implemented");
    }
}

// * Child class implementing abstract behavior
class Car extends Vehicle {

    startEngine() {
        console.log("Car engine started");
    }
}

// ? OBJECT CREATION

// * Create Animal Object
let animal1 = new Animal("Bunny");

console.log(animal1);

// * Call methods
animal1.eats();
animal1.jumps();

// * Getter Example
console.log("Animal Name:", animal1.name);

// * Setter Example
animal1.name = "Rabbit";

// * Getter again
console.log("Updated Name:", animal1.name);

// * Static Method
Animal.info();

// * CREATE LION OBJECT

let lion1 = new Lion("Shera");

console.log(lion1);

// * Inherited Method from Animal
lion1.jumps();

// * Overridden Method
lion1.eats();

// * Lion's own Method
lion1.roar();

// ? POLYMORPHISM
// * Same method, different behavior

let animals = [
    new Animal("Bunny"),
    new Lion("King Lion")
];

// Loop through all objects
animals.forEach((animal) => {

    // Same method call
    // Output depends on object type
    animal.eats();
});

// ? ABSTRACTION DEMO

let myCar = new Car();

myCar.startEngine();

/* 1. Class
   → Blueprint for creating objects.

2. Object
   → Real instance created from a class.

3. Constructor
   → Special method that runs automatically when object is created.

4. Encapsulation
   → Keeping data and methods together inside a class.

5. Inheritance
   → Child class gets properties and methods from Parent class.

6. Method Overriding
   → Child class replaces Parent's method.

7. Polymorphism
   → Same method behaves differently for different objects.

8. Abstraction
   → Show only important details and hide implementation.

9. Static Method
   → Belongs to class, not object.

10. Getter & Setter
   → Controlled access to object properties. */