function SinginCr() {
    var header = elementCreator("header", "header", true, "PersionID", "headercss");
    var headername = elementCreator("headername", "a", false, header.id, "headername");
    headername.textContent = "Techbass";
    var Sigindiv = elementCreator("Sigindiv", "div", true, "PersionID", "Sigindiv");
    var Gmail = elementCreator("Gmail", "input", false, Sigindiv.id);
    Gmail.placeholder = "Gmail";
    var Password = elementCreator("Password", "input", false, Sigindiv.id);
    Password.placeholder = "Password";
    var OTP = elementCreator("OTP", "input", false, Sigindiv.id);
    OTP.placeholder = "OTP";
    OTP.addEventListener('input', function (event) {

        if (event.target.value) {
            GetOTPBTN.disabled = true;
            SiginBTN.disabled = false;
        } else {
            GetOTPBTN.disabled = false;
        }

    });
    var GetOTPBTN = elementCreator("getotp", "button", false, Sigindiv.id);
    GetOTPBTN.innerText = "Get OTP";
    GetOTPBTN.addEventListener('click', function (event) {
        let timeLeft = 60;




        const value1 = Gmail.value;
        const value2 = Password.value;

        const length1 = value1.length;
        const length2 = value2.length;

        if (length1 > 0 && length2 > 0) {

            GetOTPBTN.disabled = true;
            var obj = [
                {
                    "Cammands": "AC",
                    "gmail": value1,
                    "password": value2,
                },
                { "AccountStutas": { "Stutas": false } }
            ];
            get_and_set_value(obj);
            const countdownInterval = setInterval(function () {
                timeLeft--;

                const minutes = Math.floor(timeLeft / 60);
                const seconds = timeLeft % 60;

             
                GetOTPBTN.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

              
                if (timeLeft <= 0) {
                    clearInterval(countdownInterval);
                    GetOTPBTN.disabled = false;
                    GetOTPBTN.textContent = "Get OTP"; 
                }
            }, 1000); 


        } else {
            alert('At least one of the textboxes is empty.');
        }





    });
    var Username = elementCreator("Username", "input", false, Sigindiv.id);
    Username.placeholder = "UserName";
    var Mobile_No = elementCreator("Mobile_No", "input", false, Sigindiv.id);
    Mobile_No.placeholder = "Mobile_No";
    var Whatsapp_No = elementCreator("Whatsapp_No", "input", false, Sigindiv.id);
    Whatsapp_No.placeholder = "Whatsapp_No";
    var Address = elementCreator("Address", "input", false, Sigindiv.id);
    Address.placeholder = "Address";
    var City = elementCreator("City", "input", false, Sigindiv.id);
    City.value = "Basoda";
    City.disabled = true;
    var State = elementCreator("State", "input", false, Sigindiv.id);
    State.value = "Madhya Pradesh";
    State.disabled = true;
    var SiginBTN = elementCreator("SiginBTN", "button", false, Sigindiv.id);
    SiginBTN.innerText = "Sigin";
    SiginBTN.addEventListener('click', async function (event) {


        const value1 = Gmail.value;
        const value2 = Password.value;
        const value3 = Mobile_No.value
        const value4 = Whatsapp_No.value;
        const value6 = Address.value
        const value7 = Username.value
        const value8 = OTP.value
        const length1 = value1.length;
        const length2 = value2.length;
        const length3 = value3.length;
      
       
      
        if (length1 > 0 && length2 > 0 && length3 > 0) {
             SiginBTN.disabled = true;
            var obj = [
                {
                    "Cammands": "AC",
                    "Profile_Photo": "",
                    "Name": value7,
                    "Address": value6,
                    "Mobile_No": value3,
                    "Whatsapp_No": value4,
                    "gmail": value1,
                    "password":value2,
                    "OTP": value8,
                },
                { "AccountStutas": { "Stutas": true } }
            ];

          
         var datarec =  await  get_and_set_value(obj);
         if(datarec[0].message[0].message === "the Account ALL ready exit" || datarec[0].message[0].message === "Account Create Success")
         {
             alert(datarec[0].message[0].message );
            window.location.href = "index.html?Gmail="+Gmail.value+"&Password="+Password.value+"&status=Entery";
         }

         if(datarec[0].message[0].message === "the otp not match" )
         {
            alert("The OTP is Wrong");
            SiginBTN.disabled = false;

         }
       
           

        } else {
            SiginBTN.disabled = false;
            alert("fill the all box");
          
        }

    });



}

SinginCr()