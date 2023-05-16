const express = require('express');
const router = express.Router();
const PrincipalControllers = require('../controllers/PrincipalControllers');
//get
router.get('/', PrincipalControllers.IndexGet);
router.get('/InicioSesion',PrincipalControllers.InicioSesionGet);

//post
router.post('/InicioSesion',PrincipalControllers.InicioSesionPost);

module.exports= router;