const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

const db = require('./database.js');

// Enable CORS for client-side
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/generatePalette', async (req, res) => {
    const userInput = req.query.text; // Get user input from query parameter

    const url = `https://onesimpleapi.com/api/color?token=Gba0UUY8v2moTwRK1MZHXmYbi0EA2Z0t0zrBbZZQ&output=json&hue=125&text=${encodeURIComponent(userInput)}`;

    try {
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('An error occurred');
    }
});



app.post('/saveImage', async (req, res) => {
    try {
        await db.saveImage(req.body.imageData); // Save the image data to MongoDB
        res.send('Canvas saved successfully!');
    } catch (error) {
        console.error('Error saving image:', error);
        res.status(500).send('Error saving the image');
    }
});

app.get('/getImages', async (req, res) => {
    try {
        const images = await db.getImages(); // Retrieve the images from MongoDB
        res.json(images); // Send them back as JSON
    } catch (error) {
        console.error('Error retrieving images:', error);
        res.status(500).send('Error retrieving images');
    }
});
