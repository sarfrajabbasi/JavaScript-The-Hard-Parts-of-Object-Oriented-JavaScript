/*
Arrays and functions are also objects so they get access to
all the functions in Object.prototype but also more
goodies
*/

function multiplyBy2(num){
    return num*2
    }
    multiplyBy2.toString() //Where is this method?
    Function.prototype // {toString : FUNCTION, call : FUNCTION, bind : FUNCTION}
    multiplyBy2.hasOwnProperty("score") // Where's this function?
    Function.prototype.__proto__ // Object.prototype
    {hasOwnProperty: FUNCTION}