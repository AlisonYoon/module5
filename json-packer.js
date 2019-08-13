var form = document.querySelector('form')

form.addEventListener('submit', function(event){
    event.preventDefault()   // it prevents the button to send input values as it normally would
    var boxData = {}
    boxData.name = form.name.value
    boxData.petName = form.petName.value
    boxData.favColour = form.favColour.value
    boxData.favCar = form.favCar.value
    boxData.goldeneye = form.goldeneye.value
    boxData.marketing = form.marketing.value
    boxData.recieveEmails = form.recieveEmails.value
    boxData.email = form.email.value
    boxData.age = form.age.value
    boxData.marioKart = form.marioKart.value

    var json = JSON.stringify(boxData)
    console.log(json)


})