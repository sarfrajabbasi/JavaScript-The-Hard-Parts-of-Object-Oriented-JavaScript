function userCreator(name,score){
    const newUser = {};
    newUser.name =name;
    newUser.score = score;
    newUser.increment = function(){
        newUser.score++;
    };
    return newUser;
};

const user1 = userCreator("phil",4);
const user2 = userCreator("Julia",5);
// all i want that my functionality is available right there on my data.
user1.increment();//5

/*
Problems:---

Each time we create a new user we make space in our
computer's memory for all our data and functions. But
our functions are just copies
Is there a better way?

Benefits:---

It's simple and easy to reason about!*/