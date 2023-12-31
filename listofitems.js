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
      
        Product.forEach(function (prod) {
            var category = prod.category;
             
             if(category === Cate[index])
             {
                  var li  = elementCreator(prod.Items_id,"li",false,Mainul.id);
                  var img = elementCreator("images","img",false,li.id);
                  img.src = prod.Images[0];
                  var h1 = elementCreator("Name","h1",false,li.id);
                  h1.textContent = prod.Name;
                  var p = elementCreator("detail","p",false,li.id);
                  p.textContent = prod.detail;
                  var h1 = elementCreator("price","h1",false,li.id);
                  h1.textContent = prod.price;

             }
          
    
        });

       
    }
  
    


}