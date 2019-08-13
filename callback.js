function takeACallback(name, callback) {
    console.log('Hi ' + name)
    callback()
}

takeACallBack('Sam', function(){    //this second param which is a function is a callback function
    console.log('I am a callback')
})


takeACallback('Tom', function(){
    console.log('Callbacks are rad')
})