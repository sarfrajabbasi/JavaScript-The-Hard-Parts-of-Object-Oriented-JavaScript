/*
What if we want to organize our code inside one of our
shared functions - perhaps by defining a new inner
function*/

function UserCreator(name, score){
this.name = name;
this.score = score;
}
UserCreator.prototype.increment = function(){
function add1(){
this.score++;
}
// const add1 = function(){this.score++;}
add1()// this is a bggets gotchaaaaa in OOP,question come in interview.it's favorite gothcaa bug in OOP.
};
UserCreator.prototype.login = function(){
console.log("login");
};
const user1 = new UserCreator('Eva', 9)
user1.increment()

