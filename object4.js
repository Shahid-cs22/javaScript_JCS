function person(name,age){
    this.name=name;
    this.age=age;
    this.greet=function(){
        return `hello my name is ${this.name}`;
        // return `hello my name is ${this.age}`;
    }
}
let x= new person("Mohamed Shahid", 30)
console.log(x.greet());