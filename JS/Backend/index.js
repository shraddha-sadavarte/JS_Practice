const express = require('express');
const dotenv = require('dotenv');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/login', (req, res) => {
    res.send('<h1>This is the login page.</h1>');
});

app.get('/signup', (req, res) => {
    res.send('<h1>This is the signup page.</h1>');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});