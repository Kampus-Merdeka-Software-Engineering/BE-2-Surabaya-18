const express = require('express');
const router = express.Router();

const menuController = require('../controllers/menuController')

router.get('/menu', menuController.menuInput);

module.exports = router;