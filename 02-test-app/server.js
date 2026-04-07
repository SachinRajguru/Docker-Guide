const express = require("express");        // Import Express framework
const app = express();                     // Create Express app
const path = require("path");              // Import path module for file paths
const MongoClient = require("mongodb").MongoClient;  // Import MongoDB client

const PORT = 5050;                         // Server port number

// Middleware to parse form data from HTML forms
app.use(express.urlencoded({ extended: true }));

// Serve static files (CSS, HTML, images) from 'public' folder
app.use(express.static("public"));

// MongoDB connection string - connects to MongoDB container
const MONGO_URL = "mongodb://admin:qwerty@mongo:27017";  // Use 'mongo' service name from docker-compose
const client = new MongoClient(MONGO_URL);               // Create MongoDB client

// Serve homepage
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// GET all users - displays all users from database
app.get("/getUsers", async (req, res) => {
    try {
        await client.connect();                    // Connect to MongoDB
        console.log('Connected successfully to server');

        const db = client.db("college-db");        // Select 'college-db' database
        const data = await db.collection('users').find({}).toArray();  // Get all users
        
        client.close();                            // Close connection
        res.send(data);                            // Send users as JSON
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Database error");
    }
});

// POST new user - saves new user to database
app.post("/addUser", async (req, res) => {
    try {
        const userObj = req.body;                  // Get form data (email, username, password)
        console.log("New user:", userObj);
        
        await client.connect();                    // Connect to MongoDB
        console.log('Connected successfully to server');

        const db = client.db("college-db");        // Select 'college-db' database
        const data = await db.collection('users').insertOne(userObj);  // Insert new user
        console.log("Inserted:", data);
        console.log("✅ Data inserted in DB");
        
        client.close();                            // Close connection
        res.send("User created successfully!");    // Send success response
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Failed to create user");
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});