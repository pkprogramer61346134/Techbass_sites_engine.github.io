async function ItemslistCR(ITlist,ISlist)
{
    var Categorylist = [];
   

     for (let index = 0; index < ITlist.message[0].message.Product.length; index++) {
        const element = ITlist.message[0].message.Product[index];
        if(!Categorylist.includes(element.category))
        {
           Categorylist.push(element.category);

        }
       
        
     }
    
   for (let r = 0; r < Categorylist.length; r++) {
      var newlist =  await elementCreator(Categorylist[r], "ul", 1, true, "slider0","ITList");
    
      for (let y = 0; y < ITlist.message[0].message.Product.length; y++) {

         const element = ITlist.message[0].message.Product[y];
         
             if(Categorylist[r] == element.category)
             {
                      console.log(element);
                         var liftbutton = await elementCreator("liftbutton", "button", 1, false, Categorylist[r],"liftbutton");
                         var rightbutton = await elementCreator("rightbutton", "button", 1, false, Categorylist[r],"rightbutton");
                         liftbutton.innerText = "<";
                         rightbutton.innerText = ">";
                         var newli =  await elementCreator(element.Items_id, "li", 1, false, Categorylist[r],"lilist");
                         var imagestag =  await elementCreator("imagestag", "img", 1, false, element.Items_id,"imglist");
                         imagestag.src = element.Images[0];
                         var H1 = await elementCreator("heading", "h1", 1, false, element.Items_id,"h1list");
                         H1.innerText = element.Name
                         var p =  await elementCreator("paragraph", "p", 1, false, element.Items_id,"plist");
                         p.innerText = element.detail
                         var h2 = await elementCreator("heading2", "h1", 1, false, element.Items_id,"h2list");
                         h2.innerText = element.price
                         
             }
      }
     
      
   }

   
    
      
}

