// Javascript the Hard Parts - Object-oriented JavaScript:------

// OOP - an enormously popular paradigm for structuring our complex code

// — Easy to add features and functionality.

// — Easy for us and other developers to reason about (a clear structure)

// — Performant (efficient in terms of memory)

// We need to organize our code as it gets more complex so it's not just an endless series of commands.

// ------------------

/*Let's suppose we're building a quiz game with users
Some of our users
Name: Phil
Score: 4
Name: Julia
Score: 5
Functionality
+ Ability to increase score
What would be the best way to store this data and
functionality?*/

/*Objects - store functions with their associated data!*/
const user1 = {
name: "Phil",
score: 4,
increment: function() {
user1.score++;
}
};
user1.increment(); //user1.score => 4
// This is the principle of encapsulation.
// Let's keep creating our objects

/*Note we would in reality have a lot of different relevant
functionality for our user objects
— Ability to increase score
— Ability to decrease score
— Delete user
— Log in user
— Log out user
— Add avatar
— get user score
— … (100s more applicable functions)*/

