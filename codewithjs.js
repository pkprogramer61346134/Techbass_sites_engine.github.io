var url = "https://script.google.com/macros/s/AKfycbxVtHd35rYxMO86-Td5uYMYXs-hRjeedtbJrawmCXFY3xsUi7hAbeOjAcxSNrJKyg2d/exec";


async function get_and_set_value(obj) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(obj)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        obj[0] = null;
        obj[0]  = await response.json(); // Parse JSON data
        
        return obj; // Return the parsed data
    } catch (error) {
        console.error('Error:', error);
        throw error; // Rethrow the error to be caught by the calling function
    }
}
