//Simple
number, boolean, undefined, string
//Complex
array, objects

//Everything is an object

console.log(5 + "5");  //=>55   String concatenation
console.log(parseInt("5") + 5);  //=>10    Type juggling   parseInt() takes string and turned it into integer

//    + sign could do both math and string concatenation

var textFive = "5";
console.log(typeof textFive); // => string

//DOM is the browser representation of my files
//JavaScript is for DOM manipulation/interaction


//Javascript runs in the browser. It doesn't output something on the page, it just runs in the browser.
//PHP runs in the server

// ; is optional. just be consistent.


//JavaScript foreach
var list = [1, 2, 3, 4]
list.forEach(function(item) {

})

list.forEach  // => . is object accessor   just as in PHP   $object->method()   arrow

// is object accessor

//PHP  var_dump($thing);    JS console.log(thing);

//you put javascript link at the bottom outside of <body> tag, because to users' perspective it's faster, but actually there's no difference.
//Also because JS interacts with DOM, it should stay in the bottom so that it gets all the HTML elements before it runs.


//JS datatype
number : integer, Float
Boolean
String
undefined  // NULL in PHP
Array
Object
//Actually everything is an object in JS.
typeof // will give you datatype if it's simple datatype such as number, string, boolean. But actually, typeof is kind of lying because they don't really exist.
        //for array or object, it gives you object
        // because object method such as .length or .toUpperCase()  can be used to string
//prototype is a blueprint of an object.  array is a type of object. different prototype exist for different object type-string, array, number ....

