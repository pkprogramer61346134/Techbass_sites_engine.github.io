var url = "https://script.google.com/macros/s/AKfycbyv9GoLDAgVTVKBWStE3ESCJVhWRdVFC0amL28SmHw-w75fj3dIC-VnXMbQMLmDwc3T/exec";

obj = [{


}]

function OrderCancel(OrderCancele, OrderCancelresone) {


    obj[0]["OrderCancel"] = OrderCancele;
    obj[0]["OrderCancelresone"] = OrderCancelresone;




}

function screacingitesm( listener,Cammands,Item_ID) {

    obj[0]["Cammands"] = Cammands;
    obj[0]["Item_ID"] = Item_ID
    obj["listener"] = listener;
     return obj;



}


function CUstomerdetalis(listener,Cammands, Profile_Photo, Name, Address, Mobile_No, Whatsapp_No, gmail, password, OTP) {

    obj["listener"] = listener;
    obj[0]["Cammands"] = Cammands;
    obj[0]["Profile_Photo"] = Profile_Photo;
    obj[0]["Name"] = Name;
    obj[0]["Address"] = Address;
    obj[0]["Mobile_No"] = Mobile_No;
    obj[0]["Whatsapp_No"] = Whatsapp_No;
    obj[0]["gmail"] = gmail;
    obj[0]["password"] = password;
    obj[0]["OTP"] = OTP;
   
    return obj;

}

function order(Item_ID, Item_Name, Item_Quntity, Item_Price) {
    var order = {


        "Item_ID": Item_ID,
        "Item_Name": Item_Name,
        "Item_Quntity": Item_Quntity,
        "Item_Price": Item_Price,



    }


    obj[0].push(order);



}



async function get_and_set_value(objs) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(objs)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json(); // Parse JSON data
      
        return data; // Return the parsed data
    } catch (error) {
        console.error('Error:', error);
        throw error; // Rethrow the error to be caught by the calling function
    }
}
