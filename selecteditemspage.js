async function createitems(value)
{
   
    await elementCreator("detailbox", "div", 1, true,"","detailboxcs");
    var imagebox =    await elementCreator("imagbox", "img", 1, false,"detailbox","imgboxcs");
    var  snambox = await elementCreator("snampdev","div",1,false,"detailbox","snampdiv")
    for (let index = 0; index < value.message[0].message.Product[0].Images.length; index++) {
       
       var values =  await elementCreator("snamp"+index,"samp",1,false,"snampdev","namp");
       
        
    }
    console.log(value.message[0].message.Product[0].Images.length);
    var currentImageIndex = 0;
    var images = value.message[0].message.Product[0].Images;
    imagebox.src =  value.message[0].message.Product[0].Images[0];

    // Touch event variables
    var touchStartX = 0;
    var touchEndX = 0;

    // Add touchstart and touchend event listeners to the image element
    imagebox.addEventListener('touchstart', function (e) {
        touchStartX = e.touches[0].clientX;
    });

    imagebox.addEventListener('touchend', function (e) {
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
        for (let index = 0; index < images.length; index++) {
          
            var elemdf = document.getElementById("snamp"+index);
            elemdf.style.backgroundColor  = "white";
            
        }
        imagebox.src = images[currentImageIndex];
        var elementvalue = document.getElementById("snamp"+currentImageIndex);
        elementvalue.style.backgroundColor  = "black";
    }

    var name =   await elementCreator("Name", "h1", 1, false,"detailbox");
    name.innerText = value.message[0].message.Product[0].Name;

    var details =  await elementCreator("details", "p", 1, false,"detailbox");
    details.innerText = value.message[0].message.Product[0].detail;
    var Price = await elementCreator("Price", "h1", 1, false,"detailbox");
    Price.innerText = value.message[0].message.Product[0].price;



}

async function CNS()
{

    const params = new URLSearchParams(window.location.search);
        var truefalsevalue = await params.get("itemsid");
    await headCr(  Addressmekar("itemselected","LIN",truefalsevalue,"Pavan","delfu",36859569,969588,"pavanrohmail.com","pavan6134",96856));
  
}