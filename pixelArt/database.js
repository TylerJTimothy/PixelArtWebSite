const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('pixelArt');
const userCollection = db.collection('user');
const imageCollection = db.collection('images');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

async function saveImage(imageData) {
  const result = await imageCollection.insertOne({ imageData });
  console.log(`Image saved with id: ${result.insertedId}`);
  return result;
}

async function getImages() {
  try {
      const images = await imageCollection.find({}).toArray();
      return images;
  } catch (ex) {
      console.error(`Error retrieving images: ${ex.message}`);
      throw ex;
  }
}

module.exports = { getUser,
    getUserByToken,
    createUser,
    saveImage, 
    getImages };

