const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

// Home
router.get('/', (req, res) => {
  res.render('index');
});

// Show all blogs
router.get('/blog', async (req, res) => {
  const blogs = await Blog.find();
  res.render('blog', { blogs });
});

// Single blog
router.get('/blog/:id', async (req, res) => {
  const blogPost = await Blog.findById(req.params.id);

  if (blogPost) {
    res.render('blogpost', { blogPost });
  } else {
    res.status(404).send('Blog not found');
  }
});

module.exports = router;
