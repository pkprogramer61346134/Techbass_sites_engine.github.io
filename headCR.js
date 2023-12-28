

function Addressmekar(listener, Cammands, Profile_Photo, Name, Address, Mobile_No, Whatsapp_No, gmail, password, OTP) {

    if (listener == "Local") {
        var objes =  CUstomerdetalis(listener, Cammands, Profile_Photo, Name, Address, Mobile_No, Whatsapp_No, gmail, password, OTP);
       
        return objes;

    }

    if (listener == "AC") {
        var objes =   CUstomerdetalis(listener, Cammands, Profile_Photo, Name, Address, Mobile_No, Whatsapp_No, gmail, password, OTP);
        return objes;
    }

    if(listener == "itemselected")
    {

        var objs  = screacingitesm(listener,Cammands,Profile_Photo);
      
        return objs;

    }



}
async function headCr(data) {

    

    const params = new URLSearchParams(window.location.search);
    var truefalsevalue = await params.get("entre");
    var gmail = await params.get("gmail");
    var password = await params.get("password");
    var othervaluecheck = await params.get("other");
    console.log(truefalsevalue);
    if(truefalsevalue === "false" || othervaluecheck == "Account Create Success")
    {
       
       var getdata =  await Addressmekar("AC", "LIN", "Profile_Photo", "Name", "Address", "Mobile_No", "Whatsapp_No", gmail, password, "OTP"); 
       var datawa = await get_and_set_value(getdata);
        datawa["listener"] = "sign_in";
        await controller(datawa);
        await ItemslistCR(datawa, "ISlist");
       
        
    }else{

    

    if (data.listener == "Local") {

      document.body.attributes.length = 0;
      
        var datawa = await get_and_set_value(data);
        await controller(data);
        console.log(data);
        await ItemslistCR(datawa, "ISlist");


    }
    if (data.listener == "AC") {

        document.body.attributes.length = 0;
      
        var datawa = await get_and_set_value(data);
       
       return datawa;
      


    }

   

    }

    if(data.listener == "itemselected")
    {

        
        await controller(data);
        console.log(data);
        var datawa = await get_and_set_value(data);
        console.log(datawa);
        await  createitems(datawa);

    }


}

