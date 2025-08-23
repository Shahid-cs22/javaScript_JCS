class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }
    greet(){
        return `hello im ${this.name}`
    }
}let x= new person("mohamed Shahid", 21);
console.log(x);