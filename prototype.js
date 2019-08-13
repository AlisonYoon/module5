String.prototype.newMethod = function() {  //this will add newMethod method to every string in the file
    console.log('aaa')                     //because JS doesn't have type hinting, this way, you can use this newMethod method only to string data type.
}

var name = 'Tom'

name.newMethod()

// Number.prototype.doAThing = function(){ }