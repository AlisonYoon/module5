var searchBars = document.getElementsByClassName('search-bar')

console.log(searchBars)
for(x = 0; x <searchBars.length; x++) {
    searchBars[x].textContent = 'sdfsdf';
}

var allTheDivs = document.getElementsByTagName('div')

//with getELementBy  doesn't give access to use forEach method

//newer way of doing this

var searchBars = document.querySelectorAll('.search-bar')
var firstSearchBar = document.querySelector('search-bar')   // select the first search-bar

//querySelector(id) will be slower than getElementById(id). querySelector will try to search letter by letter, it doesn't know that if it's for id or class, it will search for everything to find a match

console.log(searchBars)

searchBars.forEach(function(searchBar) {
    searchBar.textContent = 'this is a search bar'
})

var contactUs = document.getElementById('contact-us')
var example = '<p>This is coming from javascript</p>'
contactUs.innerHTML += example
//we don't use innerHTML when something could actually change the page structure, and when that something comes from the user

contactUs.dataset.name = 'Bob'    // this saves 'Bob' in the data-name inside html tag as a short-term storage. => <div id="contact-us" data-name="Bob">
contactUs.dataset.height = 'Bob'
document.getElementById('contact-us').dataset.name = 'Bob'   // you can do this as well instead of creating a var to do it.

if(contactUs.dataset.name === 'Bob') {   // you can use this data-name in a conditional like this.
    //do something
}


