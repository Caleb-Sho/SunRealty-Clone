// api/mongo.js
const { MongoClient, ServerApiVersion } = require('mongodb');

// Replace <username>, <password>, and <database> with your MongoDB credentials and database name
const uri = "mongodb+srv://calebshokunbi619:<Anonymous@319619>@cluster0.fwiqf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let db;

async function connectToDatabase() {
  try {
    await client.connect();
    db = client.db("your-database-name"); // Replace with your database name
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
}

function getDatabase() {
  if (!db) {
    throw new Error("Database not initialized. Call connectToDatabase first.");
  }
  return db;
}

module.exports = {
  connectToDatabase,
  getDatabase
};
