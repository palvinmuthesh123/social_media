const express = require('express');
const { followUser } = require('../controllers/userController');
const authenticate = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/:id/follow', authenticate, followUser);

module.exports = router;
