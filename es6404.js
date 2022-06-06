//Regular Function
function printer(){
    console.log("Hp")
}

function getCapture(camera){
    //Invking the passed function
    camera()
}
//High-Order  Function(HOF)
//1.a function as an argument.
getCapture(function(){
    console.log("Cannon")
})

//2.Take the returned function in a variable.
function returnFunc(){
    return function(){
        console.log("hi")
    }
}
returnFunc()()
