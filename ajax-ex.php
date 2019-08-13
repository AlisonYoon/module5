<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" integrity="sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ==" crossorigin="anonymous">
    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css" integrity="sha384-aUGj/X2zp5rLCbBxumKTCw2Z50WgIr1vs/PFN4praOTvYXWlVyh2UtNUU0KAUhAX" crossorigin="anonymous">

    <title>Join the mailing list</title>
</head>
<body>
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <h1>Join the mailing list</h1>
            <form action="ajax-ex.php" method="POST">
                <div class="form-group">
                    <label>Name:</label>
                    <input type="text" name="name" class="form-control">
                </div>
                <div class="form-group">
                    <label>Pet Name:</label>
                    <input type="text" name="petName" class="form-control">
                </div>
                <div class="form-group">
                    <label>Favourite colour:</label>
                    <input type="text" name="favColour" class="form-control">
                </div>
                <div class="form-group">
                    <label>Favourite car:</label>
                    <input type="text" name="favCar" class="form-control">
                </div>
                <div>
                    <strong>Who is your favourite Goldeneye character?:</strong><br>
                    <select name="goldeneye">
                        <option value="bond">James Bond</option>
                        <option value="onatopp">Xenya Onatopp</option>
                        <option value="trevelyn">Alec Trevelyn</option>
                        <option value="boris">Boris</option>
                    </select>
                </div>
                <div><br>
                    <div class="form-group">
                        <label>How did you hear about us?:</label>
                        <input type="text" name="marketing" class="form-control">
                    </div>
                    <div class="radio">
                        <strong>Would you like to recieve emails?:</strong><br>
                        <label><input type="radio" name="recieveEmails" value="1"> Yes</label>
                        <label><input type="radio" name="recieveEmails" value="0"> No</label>
                    </div>
                    <div class="form-group">
                        <label>Email address:</label>
                        <input type="email" name="email" class="form-control">
                    </div>
                    <div>
                        <strong>Please confirm some important information:</strong><br>
                        <input type="checkbox" name="age" value="over18"> I am over 18<br>
                        <input type="checkbox" name="marioKart" value="likesMarioKart"> I like Mario Kart
                    </div><br>
                    <div class="form-group">
                        <input type="submit" class="btn btn-success" value="Spam me!">
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>

<div id="optional">
</div>
</body>
<script>
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

        var http = new XMLHttpRequest()

        http.open('POST', 'post.php', true)

        http.onreadystatechange = function() {
            if(this.readyState === 4 && this.status === 200) {
                console.log(this.responseText)
            }
        }
        http.send(json)
    })

</script>
</html>
