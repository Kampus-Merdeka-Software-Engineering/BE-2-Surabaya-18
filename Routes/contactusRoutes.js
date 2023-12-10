const express = require('express');
const router = express.Router();
const contactusController = require ('../Controller/contactusController');

router.post ('/contactus', contactusController.createcontactus);

module.exports = router;