const person = {

    FName: "Mohamed",
    LName: "Shahid",
    Id: 963522104077,
    isStudent:true,

    fullName: function () {
        return this.FName + " " + this.LName;
    }


};


// Way to call

console.log(person.FName );
console.log(person.LName);
console.log(person.Id);
console.log("--------------");
console.log(person.fullName());
console.log("--------------");
console.log(person);

console.log(person.isStudent);