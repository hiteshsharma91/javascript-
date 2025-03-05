const mysymbol = Symbol("key1")

const studentInfo = {
    name : "hitesh",
    fullName : "hitesh sharma",
    age : 24,
    email : "hiteshgoogle.com",
    [mysymbol] : "myKey1",
    Location: "Meerut",
    lastLoginDays : ["monday","tuesday","wednesday"]
}
console.log(studentInfo);

// console.log(studentInfo.email);
// console.log(studentInfo["email"]);
// console.log(studentInfo["fullName"]);
// console.log(studentInfo["Location"]);
// console.log(studentInfo[mysymbol]);

// studentInfo.email = "hitesh.@email.com"
// Object.freeze(studentInfo)
studentInfo.email = "hiteshmy@gmai.com"
console.log(studentInfo["email"]);

studentInfo.myFunction = function(){
    console.log("this is my first function");
    
}
studentInfo.myOtherFn = function(){
    console.log(`hello coder ${this.name}`);
    
}
console.log(studentInfo.myFunction());
console.log(studentInfo.myOtherFn());
