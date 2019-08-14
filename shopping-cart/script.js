var form = document.querySelector('form')
var list = document.getElementById("list")



// form.addEventListener('submit', function(event){
//     event.preventDefault()
//     var shoppingList = {}
//     shoppingList = form.item.value
//
//     var json = JSON.stringify(shoppingList)
//     list.innerHTML += '<li>' + json.replace(/['"]+/g, '')+ '<button class=\"delete\">delete</button></li>'
//     form.reset()
// })


function newElement(){
    var li = document.createElement("li")
    var inputValue = document.getElementById("item").value
    var t = document.createTextNode(inputValue)
    li.appendChild(t)

    if(inputValue === ''){
        alert("Please write something!")
    } else {
        list.appendChild(li)
    }
    form.reset()

    var span = document.createElement("span")
    var txt = document.createTextNode("\u00D7")
    span.className = "close"
    span.appendChild(txt)
    li.appendChild(span)

    for(var i = 0; i < close.length; i++){
        close[i].onclick = function(){
            var div = this.parentElement
            div.style.display = "none"
        }
    }
}