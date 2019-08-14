var form = document.querySelector('form')
var list = document.getElementById("list")
var deleteItem = document.getElementsByClassName("delete")


form.addEventListener('submit', function(event){
    event.preventDefault()
    var shoppingList = {}
    shoppingList = form.item.value

    var json = JSON.stringify(shoppingList)
    console.log(json)
    list.innerHTML += '<li>' + json.replace(/['"]+/g, '')+ '<button class=\"delete\">delete</button></li>'
    form.reset()
})

