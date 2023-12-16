
async function controller(hendal) {


    await elementCreator("header", "header", 1, true);
    await elementCreator("threeline", "label", 1, false, "header0", "threeline");
    await elementCreator("checkbox", "input", 1, false, "header0", "checkboxclass");
    await elementCreator("line", "samp", 3, false, "threeline0");
    await elementCreator("Screachbox", "input", 1, false, "header0", "Screachbox");
    await elementCreator("Cartimag", "img", 1, false, "header0", "cartimag");
    await elementCreator("slider", "div", 1, true, "header0", "slaider");
    if (hendal == 'Local') {
        await elementCreator("Sign_in", "button", 1, false, "slider0", "sign_in");
        await elementCreator("Login", "button", 1, false, "slider0", "login");

    }

    if (hendal == "sign_in") {
        await elementCreator("ProfileIMG", "img", 1, false, "slider0");
        await elementCreator("Name", "a", 1, false, "slider0");
        await elementCreator("hr", "hr", 1, false, "slider0");
        await elementCreator("YourCard", "a", 1, false, "slider0");
        await elementCreator("Order", "a", 1, false, "slider0");
        await elementCreator("Category", "a", 1, false, "slider0");
    }
    await definer(hendal);
    await sliderfuntions();

}

function definer(hendal) {


    var Screachbox = document.getElementById('Screachbox0');
    Screachbox.setAttribute("placeholder", "Searching...");
    var Cartimag = document.getElementById("Cartimag0");
    Cartimag.src = "icons8-cart-64.png"
    var checkbox = document.getElementById('checkbox0');
    checkbox.setAttribute("type", "checkbox");
    checkbox.style.display = "none";
    var threeline = document.getElementById('threeline0');
    threeline.setAttribute("for", "checkbox0");

    if (hendal == 'Local') {
        var Sign_in = document.getElementById("Sign_in0");
        Sign_in.innerText = "Sign in";
        var Login = document.getElementById("Login0");
        Login.innerText = "Login"

    }

    if (hendal == "sign_in") {
        var ProfileIMG = document.getElementById('ProfileIMG0');
        ProfileIMG.src = "download.jpg"
        var Name = document.getElementById('Name0');
        Name.innerText = "pavan kushwah";
        var YourCard = document.getElementById('YourCard0');
        YourCard.innerText = "Your Card"
        var Order = document.getElementById('Order0');
        Order.innerHTML = "Order"
        var Categray = document.getElementById('Category0');
        Categray.innerHTML = "Category";

    }


}

function sliderfuntions() {
    var checkbox = document.getElementById('checkbox0');
    var slider = document.getElementById("slider0");

    checkbox.addEventListener("change", function () {

        if (checkbox.checked) {

            slider.style.animation = 'rename 0.5s ease-in forwards';
            slider.style.display = "flex";
        } else {

            slider.style.animation = 'removes 0.5s ease-in forwards';
        }
    });

}


