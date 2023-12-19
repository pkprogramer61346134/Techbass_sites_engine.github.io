

function Addressmekar(listener,Gmail,Password) {
    var newobj = {
        "listener": listener || "Local",
        "Gmail": Gmail || false,
        "Password":Password || false,
        
    };
  
    return newobj;
}

async function headCr(obj)
{
    
    if(obj.listener == "Local")
    {
        document.body.attributes.length = 0;
       
        var   data =  await get_and_set_value(objtr);
         await controller("Local");

        await ItemslistCR(data,"ISlist");
       

    }
 
  

}

headCr(Addressmekar(false));
