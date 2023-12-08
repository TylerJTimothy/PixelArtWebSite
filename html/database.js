const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('simon');
const scoreCollection = db.collection('score');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

async function saveImage(imageData) {
    try {
        await client.connect();
        const collection = db.collection('images'); // 'images' is the collection name
        const result = await collection.insertOne({ imageData });
        console.log(`Image saved with id: ${result.insertedId}`);
    } catch (ex) {
        console.error(`Error saving image: ${ex.message}`);
        throw ex; // rethrow the error for the caller to handle
    } finally {
        await client.close();
    }
}

async function getImages() {
    try {
        await client.connect();
        const collection = db.collection('images'); // Adjust the collection name as needed
        const images = await collection.find({}).toArray();
        return images;
    } catch (ex) {
        console.error(`Error retrieving images: ${ex.message}`);
        throw ex;
    } finally {
        await client.close();
    }
}

module.exports = { saveImage, getImages };

