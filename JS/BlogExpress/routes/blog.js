const express = require('express');
const router = express.Router();
const blogs = require('../data/blogs');

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/blog', (req, res) => {
  res.render('blog', { blogs });
});

router.get('/blog/:id', (req, res) => {
  const blogId = parseInt(req.params.id);
  const blogPost = blogs.find(b => b.id === blogId);

  if (blogPost) {
    res.render('blogpost', { blogPost });
  } else {
    res.status(404).send('Blog post not found');
  }
});

module.exports = router;
