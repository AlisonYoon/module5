//when we console.log something, we're using web api.
//javascript doesn't know what "console" is. javascript knows how to reach out to "console" in web.
//HTTPRequest() as well, JS doesn't know what to do with it itself.
//JS doesn't know time either, so it has to reach out to something who knows the time to get the time. (setTimeout)
//anything outside of the language is JS. such as document, DOM.


//do something after a period of time has passed
//but don't stop the rest of the app from running
setTimeout(function(){   // first param is the function, second param is the timeout
    console.log('ooooo')
}, 2000)  // this is the minimum amount of time I'm asking it to evoke the function, but doesn't necessarily mean that it will happen exactly after 2 sec.

console.log('eeee')    // this will print eeee
                        // ooooo
                        // because javascript is a single threaded language. it does one thing at a time


var counter = 0
var theTimer = setInterval(function(){   // this setInterval() function calls itself.
    console.log(counter)
    counter++
}, 500)


document.getElementById('click-me').addEventListener('click', function(){
    clearInterval(theTimer)
})



//this is another web api that makes animation smoother. it doesn't run in constant time unless you define the time.
requestAnimationFrame()

var start = null;
var element = document.getElementById('thing')

function step(timestamp) {
    if (!start) {
        start = timestamp
    }
    var progress = timestamp - start
    element.style.transform = 'translateX(' + Math.min(progress / 10, 200) + 'px)'
    if (progress < 2000) {
        requestAnimationFrame(step)
    }
}

requestAnimationFrame(step)



