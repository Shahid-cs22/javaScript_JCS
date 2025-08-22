const x ={
    name:"Shahid",
    age:21,
    isStudent:true,
    greet:function(){

        return `Hello My Name Is ${this.name}`;
    }
};

console.log(x.greet());

console.log(x.isStudent);