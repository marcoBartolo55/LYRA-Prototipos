const express = require('express');
const router = express.Router();
module.exports= router;

//Get
router.get('/',PacienteControllers.Principal);
