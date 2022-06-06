//3.First class function
function sayHello(){
    return function(){
        console.log("Hi")
    }
}
//1-Using a variable
//const messege = sayHello();
//messege()
//2-Using double parentheses
sayHello()()