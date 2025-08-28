class Animal {
    constructor(name) {
        this.name = name;
    }
    speak(){
        console.log(`${this.name}, makes sound`);
    }
}
class Dog extends Animal{
    // speak(){
    //     console.log(`${this.name} barks`);
    // }
}
const myDog = new Dog("dog")
myDog.speak()