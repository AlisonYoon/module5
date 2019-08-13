function doAThing() {
    console.log('I did a thing')
}

function personalisedGreeting(name) {   //JS doesn't have "default param". (name ="Tom" doesn't work here)
    //console.log('Hi' + name)
    return 'Hi ' + name
}

//loads of code here

doAThing()  //  call the function

var personToGreet = 'Tom'

//personalisedGreeting(personToGreet)   -> call it when it didn't have return

console.log(personalisedGreeting(personToGreet))  // now it has return so call it this way

function sayHiToSomePeople(people) {
    var greeting = ''
    people.forEach(function(person){
        greeting += 'Say hi to ' + person + ' '
    })
    return greeting
}

var students = ['Liz', 'Tom', 'Cat']
console.log(students)

function changeName(people) {
    people[0] = 'Felix'
}
changeName(people)
console.log(students)  // now array changed

function changeName(people) {
    people[0] = 'Felix'
    return people     // or return it
}
var alteredStudents = changeName(people)    // and call it this way, assign it to a var
console.log(alteredStudents)