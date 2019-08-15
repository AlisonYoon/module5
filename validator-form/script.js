var form = document.getElementById('validForm')
var requiredError = document.getElementById("requiredError")
var maxLengthError = document.getElementById("maxLengthError")
var minMaxLengthError = document.getElementById("minMaxLengthError")

function validateFunction() {
    var requiredInputValue = document.getElementById("requiredInput").value
    var maxLengthValue = document.getElementById("maxLength").value
    var minMaxLengthValue = document.getElementById("minMaxLength").value

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

    if(minMaxLengthValue === "") {
        minMaxLengthError.innerText = "This is required field"
    } else {
        if(minMaxLengthValue.length < 11 || minMaxLengthValue.length > 26) {
            minMaxLengthError.innerText = "Minimum 10 characters, maximum 25 characters"
        } else{
            minMaxLengthError.innerText = ""
        }

    }
}