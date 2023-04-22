const express = require('express');

const commentpostControllers = require('../controllers/commentpost-controllers');
const authenticate = require('../middleware/auth');

const router = express.Router();

router.get('/', commentpostControllers.getPosts);

router.get('/:postid/viewcomments', commentpostControllers.viewcomments);

router.post('/:postid/comment',authenticate, commentpostControllers.comment);

module.exports = router;