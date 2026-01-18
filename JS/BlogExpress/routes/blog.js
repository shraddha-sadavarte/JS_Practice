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

//show new blogs form
router.get('/blog/new', (req, res) => {
  res.render('newblog');
});

// Create new blog
router.post('/blog/new', async (req, res) => {
  await Blog.create(req.body);
  res.redirect('/blog');
});

//show edit form
router.get('/blog/edit/:id', async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  res.render('editblog', { blog });
});

// Update blog
router.post('/blog/edit/:id', async (req, res) => {
  await Blog.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/blog');
});

// Delete blog
router.post('/blog/delete/:id', async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.redirect('/blog');
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
