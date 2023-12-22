

function Addressmekar(listener, Cammands, Profile_Photo, Name, Address, Mobile_No, Whatsapp_No, gmail, password, OTP) {

    if (listener == "Local") {
        var objes =  CUstomerdetalis(listener, Cammands, Profile_Photo, Name, Address, Mobile_No, Whatsapp_No, gmail, password, OTP);
       
        return objes;

    }

    if (listener == "ACT") {
        var objes =   CUstomerdetalis(listener, Cammands, Profile_Photo, Name, Address, Mobile_No, Whatsapp_No, gmail, password, OTP);
        return objes;
    }



}
async function headCr(data) {

    console.log(data[0].listener )
    if (data[0].listener == "Local") {

        document.body.attributes.length = 0;
      
        var datawa = await get_and_set_value(obj);
        await controller("Local");
        console.log(datawa);
        await ItemslistCR(datawa, "ISlist");


    }



}

headCr(Addressmekar("Local","LIN","name","Pavan","delfu",36859569,969588,"pavanrohmail.com","pavan3",96856));
