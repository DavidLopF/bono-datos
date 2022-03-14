var express = require('express');
var router = express.Router();

const { getAll } = require('../Controller/deparment');

router.get('/getAll', getAll);

module.exports = router;