var form = document.getElementById('validForm')
var requiredError = document.getElementById("requiredError")
var maxLengthError = document.getElementById("maxLengthError")
var minMaxLengthError = document.getElementById("minMaxLengthError")
var minMaxLengthNotRequiredError = document.getElementById("minMaxLengthNotRequiredError")
var lettersOnlyError = document.getElementById("lettersOnlyError")
var letters = /^[A-Za-z]+$/;
var radioYesRequiredError = document.getElementById("radioYesRequiredError")
var emailError = document.getElementById('emailError')

function validateFunction() {
    var requiredInputValue = document.getElementById("requiredInput").value
    var maxLengthValue = document.getElementById("maxLength").value
    var minMaxLengthValue = document.getElementById("minMaxLength").value
    var minMaxLengthNotRequiredValue = document.getElementById("minMaxLengthNotRequired").value
    var lettersOnlyValue = document.getElementById("lettersOnly").value
    var radioValue = document.querySelector('input[name="required"]:checked')
    if (radioValue == null) {
        var radioCheckedValue = null
    } else {
        var radioCheckedValue = document.querySelector('input[name="required"]:checked').value
    }
    var emailValue = document.getElementById('email').value
    var ifRadioYesValue = document.getElementById('ifRadioYes').value

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

    if(emailValue){
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var emailValidate = re.test(String(emailValue).toLowerCase());
        if(emailValidate){
            emailError.innerText = ""
        } else {
            emailError.innerText = "Please type valid email"
        }
    }

    if(radioCheckedValue == 1) {
        if(ifRadioYesValue === "") {
            radioYesRequiredError.innerText = "Please fill out this input"
        } else {
            radioYesRequiredError.innerText = ""
        }
    }



}  //validateFunction end