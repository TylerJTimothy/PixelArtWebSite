const { MongoClient } = require('mongodb');

const config = require('./dbConfig.json');
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;


const client = new MongoClient(url);
const db = client.db('startup');

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
