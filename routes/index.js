var express = require('express');
const {user, $disconnect} = require("@prisma/client");
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
    res.json('Home Page.');
});

module.exports = router;