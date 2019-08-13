var person = {
    name: 'Sam',
    age: 33,
    getInfo: function() {
        console.log(this.name + " is " + this.age + " years old")
    }
}

person.getInfo()

var aString = 'www'

console.log(aString)

//everything is an object even the entire window, so everything has "this"