//Outer Function
function greet(){
    let name = "Jhon"
    //Inner Function
    function disPlayName(){
        //Closure: accessing name variable
        console.log(`Hi: ${name}`)
    }
    disPlayName()
    return disPlayName
}
//greet()
const g1 = greet()
g1()