/* Add your JavaScript to this file */

document.addEventListener("DOMContentLoaded", function () {

    var emailaddress = document.querySelector('input[type="email"]');
    var  btn = document.querySelector('button[type="submit"]');
    var messages = document.querySelector(".message");

    

    btn.addEventListener("click", function (event){
        event.preventDefault();

        var txt = emailaddress.value;

        if (validateEmail(txt)) {

            messages.innerHTML = ` ${txt} has been added to our mailing list!`;
        
        } else {

            messages.innerHTML = `Re-enter a valid email address.`;
            
        }

    });
    
})

function validateEmail(emailaddress) {
    var re = /\S+@\S+\.\S+/;
    return re.test(emailaddress);
  }