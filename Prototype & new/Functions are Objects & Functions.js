
// The new keyword automates a lot of our manual work:------

function UserCreator(name, score) {
 this.name = name;
 this.score = score;
};


UserCreator.prototype // {};

UserCreator.prototype.increment = function(){
this.score++;
}
let user1 = new UserCreator("Phil", 4);


// Interlude - functions are both objects and functions :/

function multiplyBy2(num){
return num*2
}
multiplyBy2.stored = 5
multiplyBy2(3) // 6
multiplyBy2.stored // 5
multiplyBy2.prototype // {}


/*
We could use the fact that all functions have a default property
on their object version, ’prototype’, which is itself an object - to
replace our functionStore object
*/