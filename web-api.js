//when we console.log something, we're using web api.
//javascript doesn't know what "console" is. javascript knows how to reach out to "console" in web.
//HTTPRequest() as well, JS doesn't know what to do with it itself.
//JS doesn't know time either, so it has to reach out to something who knows the time to get the time. (setTimeout)
//anything outside of the language is JS. such as document, DOM.


//do something after a period of time has passed
//but don't stop the rest of the app from running
setTimeout(function(){   // first param is the function, second param is the timeout
    console.log('ooooo')
}, 2000)

console.log('eeee')    // this will print eeee
                        // ooooo
                        // because javascript is a single threaded language. it does one thing at a time


