//Outer funtion
function greet(name){
    //inner funtion
    function disPlayName(){
        console.log(`'Hi ${name}`)
    }
    //disPlayName()
    //returning function
    return disPlayName
}
//greet('Mark')
const g1 = greet('Mark')
g1()