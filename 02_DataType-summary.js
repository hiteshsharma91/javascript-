let StudentInfo = {
    name : "hitesh",
    course : "b.tech",
    city : "meerut"
}
console.log(StudentInfo);

function DataType(VariableS) {
    console.log(typeof VariableS)
}
DataType(StudentInfo)

// stack & heap
// stack ---->

let MyName = "hitesh";
let fullName = MyName;

fullName = "hitesh sharma"

console.log(MyName);
console.log(fullName);

let userOne = {
    userName : "hitesh_43",
    email : "my@gmail.com"
}

userTwo = userOne

userTwo.userName = "_____hitesh__16___";

console.log(userOne);
console.log(userTwo);
