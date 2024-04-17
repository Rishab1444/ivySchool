const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const dbURL = 'mongodb+srv://userDB:test123@cluster0.8wqqgo4.mongodb.net/userdb?retryWrites=true&w=majority';

// MongoDB connection
mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model('User', userSchema);

// GET all users
app.get('/api/users', async(req, res) => {
    const users = await User.find({});
    res.send(users);
});

// POST a new user
app.post('/api/users', async(req, res) => {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
});

// GET a user by ID
app.get('/api/users/:id', async(req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        res.status(404).send("User not found");
    } else {
        res.send(user);
    }
});

// PUT update a user by ID
app.put('/api/users/:id', async(req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(user);
});

// DELETE a user by ID
app.delete('/api/users/:id', async(req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});