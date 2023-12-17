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
      var listdiv  =  await elementCreator("div"+r, "div", 1, true, "slider0","support");
      var newlist =  await elementCreator(Categorylist[r], "ul", 1, false, "div"+r,"ITList");
      var liftbutton = await elementCreator("liftbutton", "button", 1, false, "div"+r,"liftbutton");
      var rightbutton = await elementCreator("rightbutton", "button", 1, false, "div"+r,"rightbutton");
      liftbutton.innerText = "<";
      rightbutton.innerText = ">";
      liftbutton.onclick = function(event) {
        event.preventDefault();
        scrollList(Categorylist[r], "left");
    };
    
    rightbutton.onclick = function(event) {
        event.preventDefault();
        scrollList(Categorylist[r], "right");
    };
    
      for (let y = 0; y < ITlist.message[0].message.Product.length; y++) {

         const element = ITlist.message[0].message.Product[y];
         
             if(Categorylist[r] == element.category)
             {
                      console.log(element);
                       
                       
                         var newli =  await elementCreator(element.Items_id, "li", 1, false, Categorylist[r],"lilist");
                         var imagestag =  await elementCreator("imagestag", "img", 1, false, element.Items_id,"imglist");
                         imagestag.src = element.Images[0];
                         var H1 = await elementCreator("heading", "h1", 1, false, element.Items_id,"h1list");
                         H1.innerText = element.Name;
                         var p =  await elementCreator("paragraph", "p", 1, false, element.Items_id,"plist");
                         p.innerText = element.detail;
                         var h2 = await elementCreator("heading2", "h1", 1, false, element.Items_id,"h2list");
                         h2.innerText = element.price;
                         
             }
      }
     
      
   }

   
    
      
}

function scrollList(ids,direction) {
   var itemList = document.getElementById(ids);
   var scrollAmount = 200; // Adjust the scroll amount as needed

   if (direction === 'left') {
       itemList.scrollLeft -= scrollAmount;
   } else if (direction === 'right') {
       itemList.scrollLeft += scrollAmount;
   }

   // Get the current scroll position or percentage scrolled
   var scrollPosition = itemList.scrollLeft;
   var totalWidth = itemList.scrollWidth - itemList.clientWidth;
   var percentageScrolled = (scrollPosition / totalWidth) * 100;

  
}

