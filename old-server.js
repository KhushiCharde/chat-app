// server.js

// 1. Express import karna
const express = require("express");
const app = express();
const port = 3000;

// 2. Middleware for JSON
app.use(express.json());

// 3. Simple chatbot route
app.post("/chat", (req, res) => {
    const userMessage = req.body.message;

    let botReply = "Sorry, mujhe samajh nahi aaya.";

    if (userMessage.toLowerCase().includes("hello")) {
        botReply = "Hi! Kaise ho?";
    } else if (userMessage.toLowerCase().includes("bye")) {
        botReply = "Bye! Milte hain phir.";
    }

    res.json({ reply: botReply });
});

// 4. Server run karna
app.listen(port, () => {
    console.log('Server running on http://localhost:${port}');
});