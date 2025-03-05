const InstaUser = new Object();
InstaUser.id = "abc123";
InstaUser.name = "hitesh"
InstaUser.isLogedIn = false

// console.log(InstaUser);

const AnotherUser = {
    email: "h@gmail.com",
    fullName: {
        userName: {
            FirstName: "hitesh",
            lastName: "sharma"
        }
    }
}
console.log(AnotherUser);
console.log(AnotherUser.fullName.userName.lastName);

const obj1 = { 1: "a", 2: "b", 3: "c" }
const obj2 = { 4: "a", 5: "b", 6: "c" }
const obj3 = { 7: "a", 8: "b", 9: "c" }

const obj4 = { ...obj1, ...obj2, ...obj3 }
console.log(obj4);

const user = [{
    id: 101,
    email: "h.com"
},
{
    id: 102,
    email: 'hitesh.com'
},
{
    id: 103,
    email: "my@gmail.com"
}
]
console.log(user);
console.log(user[1].email);

console.log(Object.keys(InstaUser));
console.log(Object.values(InstaUser));
console.log(Object.entries(InstaUser));
console.log(InstaUser.hasOwnProperty("isLogedIn"));
