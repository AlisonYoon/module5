console.log(boblin) //this gets undefined
console.log(moblin) // this gets reference error

var boblin = 'bobling'

//1. Syntax error : you wrote something dumb. It doesn't work. It happens during the parse phase(before execution). Unrecoverable.
//2. Type error : you misused a data type/accessed a property on a thing that doesn't exist(the thing, not the property)  (ie. console.log(undefined.name))
//3. Reference error : access var that doesn't exist, or the var exist but accessing its property that doesn't exist.  (ie. someArray.lemgth -> lemgth property doesn't exist)
//4. Range error :  if you try to use number that's too big for javascript
//5. Eval error : eval() method error. but don't use eval() method anyway.
//6. URI error : encodeURI() global function error. encodeURI(thing)   -> for example, space in string changed to '%20'


var aThing = 'asdf'

try {
    //do something with aThing
} catch(e) {
    //deal with the error e
} finally {
    // this runs regardless of whether there's an error or not, no one really uses this though
}

//without try catch, with just one error, entire code won't work but with try catch,
//it knows how to deal with an error when it happens and the rest of the code still works fine.
//things that is core in your program doesn't need to go into try catch because if this fails, there's no use of running rest of the code.

var people = ['mike', 'Homer', 'charlie']

try {
    console.log(checkForHomers(people))
} catch (e) {
    console.log(e)
}

function checkForHomers(applicants){
    var applicationSuccessful = true
    applicants.forEach(function(applicants){
        if(applicant === 'Homer') {
            //applicationSuccessful = false
            throw new Error('Homer detected')
        }
    })
    return applicationSuccessful
}

checkForHomers(people)
console.log('this is the end of file')