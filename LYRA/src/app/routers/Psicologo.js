const express = require('express');
const router = express.Router();
module.exports= router;

router.get('/', PsicologoControllers.Principal);

router.post('/Enlace', PsicologoControllers.EnlazarPaciente);