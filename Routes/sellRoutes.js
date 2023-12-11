const express = require('express');
const router = express.Router();

const sellController = require ('../Controller/sellController');

router.post ('/sells', sellController.createsell);

module.exports = router;