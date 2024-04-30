// Replace 'YOUR_API_KEY' with your actual API key obtained from ipstack or ipinfo.io
const apiKey = '711f10f06e26e8';

// Function to fetch user's location using geolocation API
async function getLocation() {
    try {
        const response = await fetch(`https://ipinfo.io/json?token=${apiKey}`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching location:', error);
        return null;
    }
}

// Function to check if the user is accessing the website from the UK
async function checkLocation() {
    try {
        console.log('Checking user location...');
        const locationData = await getLocation();
        console.log('Location data:', locationData);
        const country = locationData.country;
        const message = document.getElementById('location');
        
        if (country === 'GB') {
            message.textContent = 'You are accessing the website from the UK.';
        } else {
            message.textContent = 'You are accessing the website from outside the UK.';
        }
    } catch (error) {
        console.error('Error checking location:', error);
    }
}

// Call the function to check the user's location when the page loads
console.log('Viewing website...');
checkLocation();
