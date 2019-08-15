var form = document.querySelector("form");
var list = document.getElementById("list");



//https://ultimatecourses.com/blog/attaching-event-handlers-to-dynamically-created-javascript-elements



(function(){

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    var shoppingList = form.item.value;
    var li = document.createElement("li");
    list.appendChild(li);
    li.className = "dynamic-item";
    li.innerHTML += shoppingList
    form.reset();
    var btn = document.createElement("button");
    btn.className = 'delete-btn'
    btn.innerHTML = 'delete'
    li.appendChild(btn)
    var newBtn = document.getElementsByClassName('delete-btn')

    for (var i = 0; i < newBtn.length; i++){
      newBtn[i].addEventListener('click', function(e){
        e.currentTarget.parentNode.remove()
      }, false)
    }
  })

})()
