const express = require('express');
const router = express.Router();
const PrincipalControllers = require('../controllers/PrincipalControllers');
//get
router.get('/', PrincipalControllers.index);

module.exports= router;