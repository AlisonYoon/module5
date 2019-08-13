//scope : where we can get our stuff
//PHP : functional scope.
//      Have to pass as a parameter, have to return something if you want to access it


//JS : Lexical scope with top down inheritance
//     Each function creates its own scope, also it inherits its parent's scope
//     Each function gets access to their parent's scope

var someText = 'ooo'

function doThing() {
    console.log(someText)   // this is bad
}

doThing()



// good
var someText = 'ooooooo'

function doThing(name) {
    console.log(name)
}

doThing(someText)