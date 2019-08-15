var form = document.getElementById('validForm')
var requiredError = document.getElementById("requiredError")
var maxLengthError = document.getElementById("maxLengthError")

function validateFunction() {
    var requiredInputValue = document.getElementById("requiredInput").value
    var maxLengthValue = document.getElementById("maxLength").value
    if(requiredInputValue === ""){
        requiredError.innerText = "Please fill this in"
    } else {
        requiredError.innerText = ""
    }
    if(maxLengthValue.length > 9){
        maxLengthError.innerText = "Maximum 8 characters"
    } else {
        maxLengthError.innerText = ""
    }
}