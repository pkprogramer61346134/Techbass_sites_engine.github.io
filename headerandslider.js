
async function controller(datawa) {


    await elementCreator("header", "header", 1, true);
    await elementCreator("threeline", "label", 1, false, "header", "threeline");
    await elementCreator("checkbox", "input", 1, false, "header", "checkboxclass");
    await elementCreator("line1", "samp", 3, false, "threeline");
    await elementCreator("line2", "samp", 3, false, "threeline");
    await elementCreator("line3", "samp", 3, false, "threeline");
    
    await elementCreator("Screachbox", "input", 1, false, "header", "Screachbox");
    await elementCreator("Cartimag", "img", 1, false, "header", "cartimag");
    await elementCreator("slider", "div", 1, true, "header", "slaider");
    if ( datawa.listener == 'Local') {
        await elementCreator("Sign_in", "button", 1, false, "slider", "sign_in");
        await elementCreator("Login", "button", 1, false, "slider", "login");

    }

    if ( datawa.listener == "sign_in") {
       var Userimages =  await elementCreator("ProfileIMG", "img", 1, false, "slider");
        Userimages.src = datawa.message[0].message.detalis[0].Profile_Photo ||  "download.jpg" ;
        console.log(datawa.message[0].message.detalis[0]);
       var  Username  =  await elementCreator("Name", "a", 1, false, "slider");
       Username.innerText = datawa.message[0].message.detalis[0].Name || "User Name";
        await elementCreator("hr", "hr", 1, false, "slider");
        await elementCreator("YourCard", "a", 1, false, "slider");
        await elementCreator("Order", "a", 1, false, "slider");
        await elementCreator("Category", "a", 1, false, "slider");
    }
    await definer(datawa);
    await sliderfuntions();

}

function definer(datawa) {


    var Screachbox = document.getElementById('Screachbox');
    Screachbox.setAttribute("placeholder", "Searching...");
    var Cartimag = document.getElementById("Cartimag");
    Cartimag.src = "icons8-cart-64.png"
    var checkbox = document.getElementById('checkbox');
    checkbox.setAttribute("type", "checkbox");
    checkbox.style.display = "none";
    var threeline = document.getElementById('threeline');
    threeline.setAttribute("for", "checkbox");

    if ( datawa.listener == 'Local') {
        var Sign_in = document.getElementById("Sign_in");
        Sign_in.innerText = "Sign in";
        Sign_in.onclick = function(event) {
          
          
            window.location.href = "SIgninpage.html";
            
        };

        var Login = document.getElementById("Login");
        Login.innerText = "Login"

    }

    if ( datawa.listener == "sign_in") {
       
      
        var YourCard = document.getElementById('YourCard');
        YourCard.innerText = "Your Card"
        var Order = document.getElementById('Order');
        Order.innerHTML = "Order"
        var Categray = document.getElementById('Category');
        Categray.innerHTML = "Category";

    }


}

function sliderfuntions() {
    var checkbox = document.getElementById('checkbox');
    var slider = document.getElementById("slider");

    checkbox.addEventListener("change", function () {

        if (checkbox.checked) {

            slider.style.animation = 'rename 0.5s ease-in forwards';
            slider.style.display = "flex";
        } else {

            slider.style.animation = 'removes 0.5s ease-in forwards';
        }
    });

}


