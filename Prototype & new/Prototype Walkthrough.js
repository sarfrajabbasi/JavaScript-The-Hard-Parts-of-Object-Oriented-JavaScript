// solution 2 in full:---
// declare userCreator function.
 function userCreator(name,score){
    const newUser = Object.create(userFunctionStore);
    newUser.name = name;
    newUser.score = score;
    return newUser;
 };
// declare userFunctionStore and assign object
 const userFunctionStore = {
    increment : function(){this.score++},
    login : function(){console.log("you're loggdin");}

 }
// call userCreator and assign it to user1 and user2 with arguments
 const user1 = userCreator("Phil",4);
 const user2 = userCreator("Julia",5);
//  calling object(user1) method(increment).
 user1.increment();//5


//  prototype chain:----

/*
 Problem
No problems! It's beautiful
Maybe a little long-winded
const newUser = Object.create(functionStore);
...
return newUser
Write this every single time - but it's 6 words!
Super sophisticated but not standard 
*/