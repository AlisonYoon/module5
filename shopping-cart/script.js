var form = document.querySelector("form");
var list = document.getElementById("list");



//https://ultimatecourses.com/blog/attaching-event-handlers-to-dynamically-created-javascript-elements



(function(){

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    // var shoppingList = {};
    var shoppingList = form.item.value;
    // var json = JSON.stringify(shoppingList);
    var li = document.createElement("li");
    list.appendChild(li);
    li.className = "dynamic-item";
    li.innerHTML += shoppingList
        // json.replace(/['"]+/g, "");
    form.reset();
    var btn = document.createElement("button");
    btn.className = 'delete-btn'
    btn.innerHTML = 'delete'
    li.appendChild(btn)

    //btn.onclick = deleteItem(e)
    var newBtn = document.getElementsByClassName('delete-btn')

    for (var i = 0; i < newBtn.length; i++){
      newBtn[i].addEventListener('click', function(e){
        e.currentTarget.parentNode.remove()
      }, false)
    }
  })

})()


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
