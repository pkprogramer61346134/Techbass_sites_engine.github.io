
async function controller(hendal) {


    await elementCreator("header", "header", 1, true);
    await elementCreator("threeline", "label", 1, false, "header", "threeline");
    await elementCreator("checkbox", "input", 1, false, "header", "checkboxclass");
    await elementCreator("line1", "samp", 3, false, "threeline");
    await elementCreator("line2", "samp", 3, false, "threeline");
    await elementCreator("line3", "samp", 3, false, "threeline");
    
    await elementCreator("Screachbox", "input", 1, false, "header", "Screachbox");
    await elementCreator("Cartimag", "img", 1, false, "header", "cartimag");
    await elementCreator("slider", "div", 1, true, "header", "slaider");
    if (hendal == 'Local') {
        await elementCreator("Sign_in", "button", 1, false, "slider", "sign_in");
        await elementCreator("Login", "button", 1, false, "slider", "login");

    }

    if (hendal == "sign_in") {
        await elementCreator("ProfileIMG", "img", 1, false, "slider");
        await elementCreator("Name", "a", 1, false, "slider");
        await elementCreator("hr", "hr", 1, false, "slider");
        await elementCreator("YourCard", "a", 1, false, "slider");
        await elementCreator("Order", "a", 1, false, "slider");
        await elementCreator("Category", "a", 1, false, "slider");
    }
    await definer(hendal);
    await sliderfuntions();

}

function definer(hendal) {


    var Screachbox = document.getElementById('Screachbox');
    Screachbox.setAttribute("placeholder", "Searching...");
    var Cartimag = document.getElementById("Cartimag");
    Cartimag.src = "icons8-cart-64.png"
    var checkbox = document.getElementById('checkbox');
    checkbox.setAttribute("type", "checkbox");
    checkbox.style.display = "none";
    var threeline = document.getElementById('threeline');
    threeline.setAttribute("for", "checkbox");

    if (hendal == 'Local') {
        var Sign_in = document.getElementById("Sign_in");
        Sign_in.innerText = "Sign in";
        var Login = document.getElementById("Login");
        Login.innerText = "Login"

    }

    if (hendal == "sign_in") {
        var ProfileIMG = document.getElementById('ProfileIMG');
        ProfileIMG.src = "download.jpg"
        var Name = document.getElementById('Name');
        Name.innerText = "pavan kushwah";
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


