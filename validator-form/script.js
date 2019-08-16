var form = document.getElementById('validForm')
var requiredError = document.getElementById("requiredError")
var maxLengthError = document.getElementById("maxLengthError")
var minMaxLengthError = document.getElementById("minMaxLengthError")
var minMaxLengthNotRequiredError = document.getElementById("minMaxLengthNotRequiredError")
var lettersOnlyError = document.getElementById("lettersOnlyError")
var letters = /^[A-Za-z]+$/;
var radioYesRequiredError = document.getElementById("radioYesRequiredError")

function validateFunction() {
    var requiredInputValue = document.getElementById("requiredInput").value
    var maxLengthValue = document.getElementById("maxLength").value
    var minMaxLengthValue = document.getElementById("minMaxLength").value
    var minMaxLengthNotRequiredValue = document.getElementById("minMaxLengthNotRequired").value
    var lettersOnlyValue = document.getElementById("lettersOnly").value
    var radioYesValue = document.form.required.value

    if(requiredInputValue === ""){
        requiredError.innerText = "*Please fill this in"
    } else {
        requiredError.innerText = ""
    }

    if(maxLengthValue.length > 9){
        maxLengthError.innerText = "Maximum 8 characters"
    } else {
        maxLengthError.innerText = ""
    }

    if(minMaxLengthValue === "") {
        minMaxLengthError.innerText = "*This is required field"
    } else {
        if(minMaxLengthValue.length < 11 || minMaxLengthValue.length > 26) {
            minMaxLengthError.innerText = "It should be at least 10 characters, maximum 25 characters"
        } else{
            minMaxLengthError.innerText = ""
        }
    }

    if(minMaxLengthNotRequiredValue === "") {
        minMaxLengthNotRequiredError.innerText = ""
    } else {
        if(minMaxLengthNotRequiredValue.length < 11 || minMaxLengthNotRequiredValue.length > 26){
            minMaxLengthNotRequiredError.innerText = "Enter at least 10 characters, maximum 25 characters"
        } else {
            minMaxLengthNotRequiredError.innerText = ""
        }
    }


    if(lettersOnlyValue === ""){
        lettersOnlyError.innerText = ""
    } else {
        if(lettersOnlyValue.match(letters)){
            lettersOnlyError.innerText = ""
        } else {
            lettersOnlyError.innerText = "Enter letters only"
        }
    }

    console.log(radioYesValue)

}