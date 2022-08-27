/*
JavaScript uses this proto link to give objects, functions
and arrays a bunch of bonus functionality. All objects by
default have __proto__*/

const obj = {
    num : 3
    }
    obj.num // 3
    obj.hasOwnProperty("num") // ? Where's this method?
    Object.prototype // {hasOwnProperty: FUNCTION}
    
    /*
    — With Object.create we override the default __proto__ reference to
    Object.prototype and replace with functionStore
    — But functionStore is an object so it has a __proto__ reference to
    Object.prototype - we just intercede in the chain.
    */