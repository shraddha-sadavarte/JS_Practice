const express = require('express');
const path = require('path');

// Load environment variables
require ('dotenv').config();
const connectDB = require('./config/db');

const app = express();
const port = 3000;

// Connect Database
connectDB();

//view engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// static files
app.use(express.static(path.join(__dirname, 'static')));

//routes
app.use('/', require('./routes/blog'));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
