var form = document.querySelector("form");
var list = document.getElementById("list");
var li = document.createElement("li");
var btn = document.createElement("button");

//https://ultimatecourses.com/blog/attaching-event-handlers-to-dynamically-created-javascript-elements

form.addEventListener("submit", function(event) {
  event.preventDefault();
  var shoppingList = {};
  shoppingList = form.item.value;

  var json = JSON.stringify(shoppingList);
  li.className = "dynamic-item";
  list.appendChild(li);
  li.innerHTML +=
    json.replace(/['"]+/g, "");
  form.reset();
  btn.className = 'delete-btn'
    btn.innerHTML += ''
  li.appendChild(btn)
    btn.onclick = deleteItem()
});

(function(){


})()


var deleteBtn = document.getElementByClassName("delete");
console.log(deleteBtn);
// function newElement(){
//     var li = document.createElement("li")
//     var inputValue = document.getElementById("item").value
//     var t = document.createTextNode(inputValue)
//     li.appendChild(t)

//     if(inputValue === ''){
//         alert("Please write something!")
//     } else {
//         list.appendChild(li)
//     }
//     form.reset()

//     var span = document.createElement("span")
//     var txt = document.createTextNode("\u00D7")
//     span.className = "close"
//     span.appendChild(txt)
//     li.appendChild(span)

//     for(var i = 0; i < close.length; i++){
//         close[i].onclick = function(){
//             var div = this.parentElement
//             div.style.display = "none"
//         }
//     }
// }
