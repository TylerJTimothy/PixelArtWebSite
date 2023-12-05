const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

// Enable CORS for client-side
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
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

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});