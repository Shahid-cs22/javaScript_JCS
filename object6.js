//change the values
let x={

    name:"Shahid",
    age:21,
    number:7339110968,
    isStudent:true,
    greet:function(){
        return `hrllo ${this.number}`
    }
};

x.age=31;
x.number=963522104077
x.isStudent=false

console.log(x.age);
console.log(x.number);
console.log(x.isStudent);
console.log(x.greet());
