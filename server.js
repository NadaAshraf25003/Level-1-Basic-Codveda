
const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());
app.use(express.json()); // Middleware to handle JSON data

let users = []; // Temporary storage (replace with a database later)

// GET all users
app.get("/users", (req, res) => {
    res.json(users);
});

// POST (Create a new user)
app.post("/users", (req, res) => {
    const user = { id: users.length + 1, name: req.body.name , email: req.body.email };
    users.push(user);
    res.status(201).json(user);
});

// PUT (Update a user)
app.put("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    if (!user) return res.status(404).send("User not found");

    user.name = req.body.name;
    user.email = req.body.email;
    res.json(user);
});

// DELETE (Remove a user)
app.delete("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    users = users.filter(u => u.id !== id);
    res.status(204).send();
});

app.get("/", (req, res) => {
    res.send("Welcome to my REST API!");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
