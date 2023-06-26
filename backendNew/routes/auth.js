const express = require('express');
const router = express.Router();

const { signup, signin, comments,getAllComments } = require('../controllers/auth');

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/comments', comments);
router.get('/getAllComments', getAllComments);



module.exports = router;