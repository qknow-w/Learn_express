const express = require('express');
const router = express.Router();
const user = require('../controllers/user');

/* GET users listing. */
router.get('/',user.index);

module.exports = router;
