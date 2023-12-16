function ItemslistCR(ITlist,ISlist)
{
    var Categorylist = [];
   

     for (let index = 0; index < ITlist.message[0].message.Product.length; index++) {
        const element = ITlist.message[0].message.Product[index];
        if(!Categorylist.includes(element.category))
        {
           Categorylist.push(element.category);

        }
       
        
     }
    
      
}

