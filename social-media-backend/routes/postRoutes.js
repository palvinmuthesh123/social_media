const express = require('express');
const { createPost, getPosts, likePost } = require('../controllers/postController');
const authenticate = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authenticate, createPost);
router.get('/', authenticate, getPosts);
router.post('/like', authenticate, likePost);

module.exports = router;
