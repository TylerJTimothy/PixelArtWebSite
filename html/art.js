function displayStoredText() {
    let storedText = localStorage.getItem('userName');
    let displayElement = document.getElementById('artist');
    displayElement.textContent = storedText;
}

// Execute the function once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', displayStoredText);

// Constants for canvas and context
const canvas = document.getElementById('pixelCanvas');
const ctx = canvas.getContext('2d');

// Constants for the checkerboard pattern
let numTiles = 16; // Number of tiles in one row/column
let tileSize = canvas.width / numTiles; // Size of each tile

function drawCheckerboard() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    tileSize = canvas.width / numTiles;
    for (let x = 0; x < numTiles; x++) {
        for (let y = 0; y < numTiles; y++) {
            // Check if the sum of x and y is even or odd to decide the color
            if ((x + y) % 2 === 0) {
                ctx.fillStyle = 'white';  // Color for even tiles
            } else {
                ctx.fillStyle = '#D9D9D9';  // Color for odd tiles
            }

            // Draw the tile
            ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
        }
    }

    canvas.addEventListener('mousedown', (e) => {
        if (e.button === 0) { // Left button
            isPainting = true;
            paintTile(e);
        } else if (e.button === 2) { // Right button
            isErasing = true;
            eraseTile(e);
        }
    });
    
    canvas.addEventListener('mouseup', () => {
        isPainting = false;
        isErasing = false;
    });
    
    canvas.addEventListener('mousemove', (e) => {
        if (isPainting) {
            paintTile(e);
        } else if (isErasing) {
            eraseTile(e);
        }
    });
}

drawCheckerboard();

let currentColor = 'black';  // Default paint color
let isPainting = false;
let isErasing = false;

const colorPicker = document.getElementById('colorPicker');

colorPicker.addEventListener('input', (event) => {
    currentColor = event.target.value;
});

canvas.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

canvas.addEventListener('contextmenu', eraseTile);

function getMousePos(canvas, e) {
    const rect = canvas.getBoundingClientRect();
    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    };
}

function paintTile(e) {
    const mousePos = getMousePos(canvas, e);
    const x = Math.floor(mousePos.x / tileSize);
    const y = Math.floor(mousePos.y / tileSize);

    ctx.fillStyle = currentColor;
    ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
}

function eraseTile(e) {
    e.preventDefault(); // Prevent the default context menu from showing up

    const mousePos = getMousePos(canvas, e);
    const x = Math.floor(mousePos.x / tileSize);
    const y = Math.floor(mousePos.y / tileSize);

    // Determine the original color based on the checkerboard pattern
    const originalColor = (x + y) % 2 === 0 ? 'white' : '#D9D9D9';

    ctx.fillStyle = originalColor;
    ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
}

document.getElementById('size8x8').addEventListener('click', () => {
    numTiles = 8;
    drawCheckerboard();
});

document.getElementById('size16x16').addEventListener('click', () => {
    numTiles = 16;
    drawCheckerboard();
});

document.getElementById('size32x32').addEventListener('click', () => {
    numTiles = 32;
    drawCheckerboard();
});

const getRandomTime = () => Math.random() * 13000 + 2000;

const promptOptions = [
    "Apple",
    "Horse",
    "Sword",
    "Tree",
    "Car",
    "Robot",
    "Castle",
    "Book",
    "Flower",
    "Mountain"
];

document.getElementById('promptButton').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * promptOptions.length);
    const randomPrompt = promptOptions[randomIndex];
    alert("Try drawing a " + randomPrompt);
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const changeColorRandomly = (picker) => {
    picker.value = getRandomColor();

    // Set another timeout with a random delay for this picker
    setTimeout(() => changeColorRandomly(picker), getRandomTime());
}

// Initial call for each picker to start the process
const colorPickers = document.querySelectorAll('.randomColor');
colorPickers.forEach(picker => {
    changeColorRandomly(picker);
});

const saveCanvasData = () => {
    const canvas = document.getElementById('pixelCanvas');
    const currentData = canvas.toDataURL();

    let savedImages = JSON.parse(localStorage.getItem('savedImages')) || [];
    
    if (savedImages.length < 9) {
        savedImages.push(currentData);
        localStorage.setItem('savedImages', JSON.stringify(savedImages));
    } else {
        alert("You've reached the maximum of 9 saved images.");
    }
}

document.getElementById('saveButton').addEventListener('click', () => {
    saveCanvasData();
    alert('Canvas saved successfully!');
});