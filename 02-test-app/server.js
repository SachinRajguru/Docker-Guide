// Import required modules
const express = require("express");                // Web framework for building APIs and handling HTTP requests
const app = express();                             // Initialize Express application
const path = require("path");                      // Utility module for handling file and directory paths
const MongoClient = require("mongodb").MongoClient; // MongoDB client for database interaction

const PORT = 5050;                                 // Port on which the server will run

// -------------------- MIDDLEWARE --------------------

// Middleware to parse URL-encoded data (form submissions from HTML)
// 'extended: true' allows parsing of nested objects
app.use(express.urlencoded({ extended: true }));

// Middleware to serve static assets (HTML, CSS, JS, images) from the 'public' directory
// This allows direct access to files like index.html via browser
app.use(express.static("public"));

// -------------------- DATABASE CONFIGURATION --------------------

// MongoDB connection string
// - Use 'localhost:27017' when running Node.js directly on your machine
// - Use 'mongo:27017' when running inside Docker (service name acts as hostname in Docker network)
const MONGO_URL = "mongodb://admin:qwerty@localhost:27017";

// Create a MongoDB client instance
// NOTE: In production, you should connect once at app startup and reuse the client across requests
// Current implementation connects/closes per request (not optimal but acceptable for learning/demo)
const client = new MongoClient(MONGO_URL);

// -------------------- ROUTES --------------------

// Root route - serves the main HTML page
app.get("/", (req, res) => {
    // Send index.html file from 'public' directory
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// GET /getUsers
// Fetch all user documents from 'users' collection in 'college-db'
app.get("/getUsers", async (req, res) => {
    try {
        // Establish connection to MongoDB server
        await client.connect();
        console.log('Connected to MongoDB');

        // Select database
        const db = client.db("college-db");

        // Retrieve all documents from 'users' collection
        const data = await db.collection('users').find({}).toArray();

        // Close database connection (per-request lifecycle - not recommended for production)
        client.close();

        // Send retrieved data as JSON response
        res.send(data);
    } catch (error) {
        // Log error for debugging
        console.error("Error:", error);

        // Send generic error response to client
        res.status(500).send("Database error");
    }
});

// POST /addUser
// Insert a new user document into 'users' collection
app.post("/addUser", async (req, res) => {
    try {
        // Extract form data from request body (e.g., email, username, password)
        const userObj = req.body;
        console.log("New user:", userObj);

        // Establish connection to MongoDB
        await client.connect();
        console.log('Connected to MongoDB');

        // Select database
        const db = client.db("college-db");

        // Insert new document into 'users' collection
        const data = await db.collection('users').insertOne(userObj);

        // Log insertion result (contains insertedId and metadata)
        console.log("Inserted:", data);
        console.log("✅ Data inserted in DB");

        // Close database connection
        client.close();

        // Send success response
        res.send("User created successfully!");
    } catch (error) {
        // Log error for debugging
        console.error("Error:", error);

        // Send failure response
        res.status(500).send("Failed to create user");
    }
});

// -------------------- SERVER START --------------------

// Start the Express server and listen on defined PORT
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});