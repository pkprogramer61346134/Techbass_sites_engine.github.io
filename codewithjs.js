var url = "https://script.google.com/macros/s/AKfycbyv9GoLDAgVTVKBWStE3ESCJVhWRdVFC0amL28SmHw-w75fj3dIC-VnXMbQMLmDwc3T/exec";


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
