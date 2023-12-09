function displayStoredText() {
    let storedText = localStorage.getItem('userName');
    let displayElement = document.getElementById('artist');
    displayElement.textContent = storedText;
}

// Execute the function once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', displayStoredText);

const config = require('./dbConfig.json');


window.onload = async function() {
    try {
        const response = await fetch('/getImages'); // Replace with your server URL
        const savedImages = await response.json();
        alert("loading images")
        const gridContainer = document.querySelector('.grid-container');
        
        savedImages.forEach(data => {
            const img = document.createElement('img');
            img.src = data.imageData; // Assuming your server sends the image data in a property named 'imageData'
            img.classList.add('grid-item'); // Assuming you have grid-item styling in your CSS
            gridContainer.appendChild(img);
        });
    } catch (error) {
        console.error('Error fetching images:', error);
    }
}

document.getElementById('deleteAllButton').addEventListener('click', function() {
    // Confirm deletion to prevent accidental data loss
    const confirmDeletion = window.confirm("Are you sure you want to delete all images?");
    
    if (confirmDeletion) {
        localStorage.removeItem('savedImages');  // Remove the saved images from localStorage
        
        // Optionally, clear the displayed images from the page
        const gridContainer = document.querySelector('.grid-container');
        gridContainer.innerHTML = '';
    }
});

/* window.onload = function() {
    const savedImages = JSON.parse(localStorage.getItem('savedImages')) || [];

    const gridContainer = document.querySelector('.grid-container');
    
    savedImages.forEach(data => {
        const img = document.createElement('img');
        img.src = data;
        img.classList.add('grid-item'); // Assuming you have grid-item styling in your CSS
        gridContainer.appendChild(img);
    });
}
*/