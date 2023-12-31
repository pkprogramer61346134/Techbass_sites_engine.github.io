function elementCR(obj)
{

    
    document.body.innerHTML = ''
    var header = elementCreator("header", "header",  true, "PersionID", "headercss");
   
    var checkbox = elementCreator("checkbox","input",false,header.id,"displaynone");
    checkbox.type = "checkbox";
    checkbox.addEventListener('change', function(event) {
        // Your code to handle the checkbox change goes here
         var slied = document.getElementById("sla");
        
        if (event.target.checked) {
          
            slied.style.animation = 'salider .5s forwards';
           
        } else {
          
            slied.style.animation = 'saliderrevers .5s forwards';
            
        }
    });
    var minimenudev = elementCreator("minimenudev","label",false,header.id,"minimenudev");
    minimenudev.setAttribute('for', checkbox.id);
    var sreaching = elementCreator("sreaching","input",false,header.id,"sreachingbox");
    sreaching.placeholder = "Sreaching enything";
    var snam1 =  elementCreator("snam1","samp",false,minimenudev.id,"snamcss");
    var snam2 =  elementCreator("snam2","samp",false,minimenudev.id,"snamcss");
    var snam3 =  elementCreator("snam3","samp",false,minimenudev.id,"snamcss");
    var slider = elementCreator("sla","div",true,"","slaider");
    slider.style.animation = 'saliderrevers .5s forwards';
    var cartimages = elementCreator("imgcart","img",false,header.id,"imagescart");
    cartimages.src = "cart.png"
   

    if(obj[1].AccountStutas.Stutas)
    {
        var Profileimag = elementCreator("profileimg","img",false,slider.id,);
        Profileimag.src = "profileimage.jpg";
        var username = elementCreator("ProfileName","a",false,slider.id,);
        username.textContent  = obj[0].message[0].message.detalis[0].Name;
        var line =  elementCreator("line","hr",false,slider.id,);
        var Orders = elementCreator("Orders","a",false,slider.id,);
        Orders.textContent  = "Orders";
        var Yourcard = elementCreator("Yourcard","a",false,slider.id,);
        Yourcard.textContent  = "YourCard";
        var Catgray =  elementCreator("Catgray","a",false,slider.id,);
        Catgray.textContent  = "Catgray";

    }else{


        var singin = elementCreator("Singin","button",false,slider.id,);
        singin.innerText = "Sigin";
        singin.addEventListener('click', function(event) {

            window.location.href = "Siginpage.html";

        });
        var Login = elementCreator("Login","button",false,slider.id,);
        Login.innerText = "Login";

    }
}



