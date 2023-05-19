const express = require('express');
const router = express.Router();
module.exports= router;

router.post('/Enlace', PsicologoControllers.EnlazarPaciente);