const express = require('express');
const router = express.Router();

const PsicologoControllers = require('../controllers/PsicologoControllers');
//get
router.get('/', PsicologoControllers.Principal);

module.exports= router;