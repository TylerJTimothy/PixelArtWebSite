function displayStoredText() {
    let storedText = localStorage.getItem('userName');
    let displayElement = document.getElementById('artist');
    displayElement.textContent = storedText;
}

// Execute the function once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', displayStoredText);

window.onload = function() {
    const savedImages = JSON.parse(localStorage.getItem('savedImages')) || [];

    const gridContainer = document.querySelector('.grid-container');
    
    savedImages.forEach(data => {
        const img = document.createElement('img');
        img.src = data;
        img.classList.add('grid-item'); // Assuming you have grid-item styling in your CSS
        gridContainer.appendChild(img);
    });
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