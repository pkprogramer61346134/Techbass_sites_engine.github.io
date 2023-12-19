var url  = "https://script.google.com/macros/s/AKfycbyPrfYeZModMptOAs2q-fzrbXEabO8pmbY1rdKL2z0DJ0orXIqtVBnJepmrg2rzAt9K/exec";

objtr = [{

    "Cammands": "LIN",
    "Profile_Photo": "",
    "Name": "Neelesh kushwaha",
    "Address": "petrol the samne",
    "Mobile_No": 856958658,
    "Whatsapp_No": 68531546,
    "gmail": "pavanroheria2@gmail.com",
    "password": "ridhima6134",
    "OTP": 966256,
    "order": [{
      "Item_ID": 122354,
      "Item_Name": "mouse",
      "Item_Quntity": 10,
      "Item_Price": 250,
  
    }],
  
    //for order cancel
    "OrderCancel": 44842778,
    "OrderCancelresone": "its not good for used",
  
    //for Sreaching History save
    "Item_ID": 122354,
  
  
  }]



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
