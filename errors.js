console.log(boblin) //this gets undefined
console.log(moblin) // this gets reference error

var boblin = 'bobling'

//1. Syntax error : you wrote something dumb. It doesn't work. It happens during the parse phase(before execution). Unrecoverable.
//2. Type error : you misused a data type/accessed a property on a thing that doesn't exist(the thing, not the property)  (ie. console.log(undefined.name))
//3. Reference error : access var that doesn't exist, or the var exist but accessing its property that doesn't exist.  (ie. someArray.lemgth -> lemgth property doesn't exist)
//4. Range error :  if you try to use number that's too big for javascript
