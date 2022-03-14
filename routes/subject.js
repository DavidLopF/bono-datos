var express = require('express');
var router = express.Router();

const { postSubject } = require('../Controller/subject');
const { validateData } = require('../middlewares/validate-data');
const { bodySubjects } = require('../middlewares/validate-body');


router.post('/', [
    bodySubjects,
    validateData,
], postSubject);



module.exports = router;
