/*
Solution 2:----

Store the increment function in just one object and
have the interpreter, if it doesn't find the function on
user1, look up to that object to check if it's there
How to make this link? */

// Using the protoype chain:---

const functionStore = {
    increment : function(){this.score++;},
    increment : function(){console.log("you 're loggeding");}
}
const user1 = {
    name:"Phil",
    score :4
}

user1.name // name is a proprerty of user1 object
user1.increment // Error! increment is not!

/*
Link user1 and functionStore so the interpreter, on not finding .increment,
makes sure to check up in functionStore where it would find it */


// Make the link with Object.create() technique:---

const user11 = Object.create(functionStore)
user11 // {}
user11.increment // function....

/*
Interpreter doesn't find .increment on user1 and
looks up the prototype chain to the next object and
finds .increment 1 level up*/