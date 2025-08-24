let x={
    name:"Shahid",
    age:21,
};

Object.freeze(x) //not change the update


x.age=32;
x.name="mohamed shahid"

console.log(x);