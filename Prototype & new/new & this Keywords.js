// Solution 3- Introducing the keyword that automate the hard work :new

/*
const user1 = new userCreator("Phil", 4)

When we call the constructor function with new in front we automate 2 things

1. Create a new user object
2. return the new user object

But now we need to adjust how we write the body of userCreator - how can we:

— Refer to the auto-created object?
Ans:--- this keyword

— Know where to put our single copies of functions?

Ans:--- in prototype property (some place where we put methods/functions),prototype :{ put here with dotnotion}

*/