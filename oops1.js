class Animal {
    constructor(name) {
        this.name = name;
    }
    speak(){
        console.log(`${this.name}, makes a sound`);
    }
}
const cat = new Animal("shahid");
cat.speak();
console.log(cat.name);