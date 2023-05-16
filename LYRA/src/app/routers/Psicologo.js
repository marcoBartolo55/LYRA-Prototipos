const express = require('express');
const router = express.Router();
const PsicologoControllers = require('../controllers/PsicologoControllers');
//Get
router.get('/', PsicologoControllers.Principal);

//Post
router.post('/Resumenes',PsicologoControllers.Resumenes);
module.exports= router;