var url = "https://script.google.com/macros/s/AKfycbyPrfYeZModMptOAs2q-fzrbXEabO8pmbY1rdKL2z0DJ0orXIqtVBnJepmrg2rzAt9K/exec";

obj = [{


}]

function OrderCancel(OrderCancel, OrderCancelresone) {
    var OrderCancel = {

        "OrderCancel": OrderCancelresone,
        "OrderCancelresone": OrderCancelresone,

    }
    obj.push(order);

}

function screacingitesm(Item_ID) {
    var shreachingitems = {
        "Item_ID": Item_ID

    }

    obj.push(shreachingitems);
}


function CUstomerdetalis(Cammands, Profile_Photo, Name, Address, Mobile_No, Whatsapp_No, gmail, password, OTP) {
    var detaisl = {

        "Cammands": Cammands,
        "Profile_Photo": Profile_Photo,
        "Name": Name,
        "Address": Address,
        "Mobile_No": Mobile_No,
        "Whatsapp_No": Whatsapp_No,
        "gmail": gmail,
        "password": password,
        "OTP": OTP,
    }

    obj.push(detaisl);

}

function order(Item_ID, Item_Name, Item_Quntity, Item_Price) {
    var order = {


        "Item_ID": Item_ID,
        "Item_Name": Item_Name,
        "Item_Quntity": Item_Quntity,
        "Item_Price": Item_Price,



    }


    obj.push(order);



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
