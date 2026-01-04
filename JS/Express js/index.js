const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); //for current folder path


app.set('view engine', 'ejs'); //render ejs pages

app.get('/', (req, res) => {
    fs.readdir('./files', (err, files) => {
        res.render('main', { files: files });
    })
});

app.post('/create', (req, res) => {
    fs.writeFile(`files/${req.body.title.split(' ').join(' ')}.txt`, req.body.content, (err) => {
        if (err) {
            return res.status(500).send('Error creating file');
        }  
        res.redirect('/');
    });
});

// dynamic route for profile
// app.get('profile/:name', (req, res) => {
//     const name = req.params.name;
//     res.render("profile", { name: name });
// });


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});