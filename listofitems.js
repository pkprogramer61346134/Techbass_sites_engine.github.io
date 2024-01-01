async function listCR(obj) {
    var Product = obj[0].message[0].message.Product;
    var Cate = [];
    console.log(Product);
    Product.forEach(function (prod) {
        var category = prod.category;

        if (!Cate.includes(category)) {
            Cate.push(category);

        }


    });
    
    for (let index = 0; index < Cate.length; index++) {
        var Mainuldiv = elementCreator("div"+index,"div",true,"","maindivoful");
        var Mainul = elementCreator(Cate[index],"lu",false,Mainuldiv.id,"ulcss");
        var conter = 0;
        Product.forEach(function (prod) {
            var category = prod.category;
             
             if(category === Cate[index])
             {
                  var li  = elementCreator(prod.Items_id,"li",false,Mainul.id);
                  conter++;
                  li.addEventListener('click', async function(event) {
                    
                    const urlParams = new URLSearchParams(window.location.search);
                    const Entery = await urlParams.get('status');
                    const Gmail = await urlParams.get('Gmail');
                    const Password = await urlParams.get('Password');
                  
                    window.location.href = "seleteditesm.html?Gmail="+Gmail+"&Password="+Password+"&status="+Entery+"&Items_id="+prod.Items_id;
                  })
                  var img = elementCreator("images","img",false,li.id);
                  img.src = prod.Images[0];
                  var h1 = elementCreator("Name","h1",false,li.id);
                  h1.textContent = prod.Name;
                  var p = elementCreator("detail","p",false,li.id);
                  p.textContent = prod.detail;
                  var h1 = elementCreator("price","h1",false,li.id);
                  h1.textContent = prod.price;
             
             }
              console.log(conter);
             if(conter === 4)
             {
                Mainul.classList.toggle("rtbox",true);
                conter = 0;
             }else{

                Mainul.classList.toggle("rtbox",false);
             }
            

        });

       
    }
  
    


}