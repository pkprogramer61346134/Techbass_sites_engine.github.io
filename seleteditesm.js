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
     var sampdiv = elementCreator("sampdiv","div",false,maindiv.id);
     img.src =   prod[0].Images[0];
     prod[0].Images.forEach(function(data,index) {

      var imagescounter = elementCreator("couneer"+index,"samp",false,sampdiv.id);
     
         
      });
      var getsamp = document.getElementById("couneer0");
          getsamp.style.backgroundColor = "black";

    

      var currentImageIndex = 0;
      var images =   prod[0].Images

      // Touch event variables
      var touchStartX = 0;
      var touchEndX = 0;

      // Add touchstart and touchend event listeners to the image element
      img.addEventListener('touchstart', function (e) {
          touchStartX = e.touches[0].clientX;
      });

      img.addEventListener('touchend', function (e) {
          touchEndX = e.changedTouches[0].clientX;

          // Calculate the difference in X coordinates
          var deltaX = touchEndX - touchStartX;

          // Check if the swipe is left or right
          if (deltaX > 50) {
              // Swipe right, show the previous image
              showImage(-1);
          } else if (deltaX < -50) {
              // Swipe left, show the next image
              showImage(1);
          }
      });

      // Function to update the image based on the provided index change
      function showImage(indexChange) {
          currentImageIndex += indexChange;

          // Ensure the index stays within bounds
          if (currentImageIndex < 0) {
              currentImageIndex = images.length - 1;
          } else if (currentImageIndex >= images.length) {
              currentImageIndex = 0;
          }

          // Update the image source
         
          images.forEach(function(data,index) {

                     var gd = document.getElementById("couneer"+index);
                     gd.style.backgroundColor = "white";
          });
          var getsamp = document.getElementById("couneer"+currentImageIndex);
          getsamp.style.backgroundColor = "black";
          img.src = images[currentImageIndex];
      }



     var line =  elementCreator("line","hr",false,maindiv.id,);
     var h1 = elementCreator("Name","h1",false,maindiv.id);
     h1.textContent = prod[0].Name;
     var p = elementCreator("detail","p",false,maindiv.id);
     p.textContent = prod[0].detail;
     var h1 = elementCreator("price","h1",false,maindiv.id,"prices");
     h1.textContent = prod[0].price;
     var buttonsdiv = elementCreator("buttonsdiv","div",true,"","buttonsdiv");
     var Buynow = elementCreator("Buynow","button",false,buttonsdiv.id,);
     Buynow.innerText = "Buy Now";
     var Addcart = elementCreator("Addcart","button",false,buttonsdiv.id,);
     Addcart.innerText = "ADD Cart";
     var obj2 = [
      { "Cammands": "LIN" },
      { "AccountStutas": { "Stutas": false } }
   ];
   var value2 = await get_and_set_value(obj2);
     await listCR(value2);
   
}

createCr("pavan");