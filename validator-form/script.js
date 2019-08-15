var form = document.getElementById('validForm')
var requiredInputValue = document.getElementById("requiredInput").value
var requiredError = document.getElementById("requiredError")

function validateFunction() {
    if(requiredInputValue == ""){
        requiredError.innerText = "Please fill this in"
    }
}