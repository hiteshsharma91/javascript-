function name(){
    
    console.log("h")
    console.log("i");
    console.log("t");
    console.log("e");
    console.log("s");
    console.log("h");
}
name()

// function AddTwoNum (num1, num2){
//     console.log(num1 + num2);
    
// }
// AddTwoNum(4, 5)

function AddTwoNum(num1,num2) {
    let sum = num1 + num2;
    console.log(sum);
    
}
AddTwoNum(3,6)

// function AddTwoNum (num1, num2){
//     return result = num1 + num2
// }
// console.log(AddTwoNum(3,8));

function UserActive(username) {
    if(username === undefined){
        console.log("please enter the user name");
        
    }
    else{
        console.log(`${username} is active`);
    }
    
}
UserActive()
// UserActive("hitesh")

function cartPrice(...price){
    console.log(price);
    // return price;
    
}
cartPrice(299, 499, 199);

const user ={
    username: "hitesh",
    price : 199
}
function handleUser(anyUser){
    console.log(`username is ${anyUser.username}. and price is ${anyUser.price}`);
    
}
// handleUser(user);
handleUser({
    username : "bhanu",
    price : 299
})

const arr = [200, 300, 400, ];

 function ArraySecondValue(array){
    console.log(array[1]);
    
 }
//  ArraySecondValue(arr);
ArraySecondValue([300,400,500])

