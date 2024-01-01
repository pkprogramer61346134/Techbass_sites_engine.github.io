async function createCr()
{
    var obj = [
        { "Cammands": "LIN" },
        { "AccountStutas": { "Stutas": false } }
     ];
     const urlParams = new URLSearchParams(window.location.search);
     const parameterValue1 = await urlParams.get('status');
     const parameterValue2 = await urlParams.get('Gmail');
     const parameterValue3 = await urlParams.get('Password');
     const parameterValue4 = await urlParams.get('Items_id');
  
     obj[0]["gmail"] = parameterValue2;
     obj[0]["password"] = parameterValue3;
     obj[0]["Item_ID"] = parameterValue4;
     var value = await get_and_set_value(obj);
     if (parameterValue1 === "Entery") {
        obj[1].AccountStutas.Stutas = true;
      
        await elementCR(value);
        
     }else{

        await elementCR(obj);
     }

     
      var prod = value[0].message[0].message.Product;
      console.log(prod);
     var maindiv = elementCreator("maindiv","div",true,"","maindiv");
     var img = elementCreator("images","img",false,maindiv.id);
     img.src = prod[0].Images[0];
     var line =  elementCreator("line","hr",false,maindiv.id,);
     var h1 = elementCreator("Name","h1",false,maindiv.id);
     h1.textContent = prod[0].Name;
     var p = elementCreator("detail","p",false,maindiv.id);
     p.textContent = prod[0].detail;
     var h1 = elementCreator("price","h1",false,maindiv.id);
     h1.textContent = prod[0].price;
     var buttonsdiv = elementCreator("buttonsdiv","div",true,"","buttonsdiv");
     var Buynow = elementCreator("Buynow","button",false,buttonsdiv.id,);
     Buynow.innerText = "Buy Now";
     var Addcart = elementCreator("Addcart","button",false,buttonsdiv.id,);
     Addcart.innerText = "ADD Cart";
   
}

createCr("pavan");