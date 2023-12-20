async function singinpage() {

    var div = await elementCreator("maindiv", "div", 1, true, "maindev", "maindev");
    var Gmail = await elementCreator("Gamil", "input", 1, false, "maindiv");
    Gmail.placeholder = "Enter your Gmail"
    var Password = await elementCreator("password", "input", 1, false, "maindiv");
    Password.placeholder = "Enter your Password"
    var OTP = await elementCreator("TOP", "input", 1, false, "maindiv");
    var OTPSender = await elementCreator("GetOTP", "a", 1, false, "maindiv", "GETOPTS");
    OTPSender.innerText = "Get OTP";
    var OTPSender = document.getElementById("GetOTP");

    OTPSender.addEventListener("click", function (e) {

        var Gmail = document.getElementById("Gamil");
        var password = document.getElementById("password");

        if (Gmail.value < 5 || password.value < 5) {


            window.alert("Enter the Gmail.com and password");
            return;

        }
        OTPSender.innerText = "Wait."
        OTPSender.disabled = true;
    
    
     
        for (var i = 50; i >= 1; i--) {
           
            (function (count) {
                setTimeout(function () {
                    OTPSender.innerText = count;
                    OTPSender.style.pointerEvents = 'none';
                   if(count <= 1)
                   {
                    
                    OTPSender.innerText = "Get OTP";
                    OTPSender.style.pointerEvents = 'auto';
                   }
                }, (30 - count) * 1000); 
               
                OTPSender.innerText = "Get OTP";
            })(i);
          
        }
        
       

    });
    OTP.placeholder = "Enter your OTP";
    var Virfybtn = await elementCreator("vrbtn", "button", 1, false, "maindiv", "Virfy");
    Virfybtn.innerText = "Sign";
    Virfybtn.addEventListener("click", function (e) {
        var Gmail = document.getElementById("Gamil");
        var password = document.getElementById("password");
        var OTP = document.getElementById("TOP");
        if (password.value < 5 || Gmail.value < 5 || OTP.value < 5) {


            window.alert("fill the all box");
            return;
        }


    });

}

singinpage();


