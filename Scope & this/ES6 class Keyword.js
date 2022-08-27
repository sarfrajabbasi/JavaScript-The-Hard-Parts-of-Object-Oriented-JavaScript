/*
Solution 4:-----------

We’re writing our shared methods separately from our
object ‘constructor’ itself (off in the User.prototype
object)

Other languages let us do this all in one place. ES2015
lets us do so too.
*/


// The class ‘syntactic sugar’:----------

class UserCreator{
    constructor(name,score){
        this.name = name;
        this.score =score;
    }
    increment(){
        this.score++;
    }
    login(){
        console.log("Login");
    }
}

const user1 = new UserCreator("Eva",9);
user1.increment();

/*

Benefits:-------
— Emerging as a new standard
— Feels more like style of other languages (e.g. Python)

Problems:--------
— 99% of developers have no idea how it works and
therefore fail interviews
*/

