var url = "https://script.google.com/macros/s/AKfycbyB9oHN29f6RyFc5w0mY8g2E8wHxsM0CT4W5YSZsARQSVCb6hVsd1VcJJITk26U_NUj/exec";


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
