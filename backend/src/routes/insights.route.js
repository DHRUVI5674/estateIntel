const express = require('express');
const router = express.Router();
const { getInsightsByCity, getAreaReport } = require('../controllers/insights.controller');

router.get('/:city', getInsightsByCity);
router.get('/report/:city', getAreaReport);

module.exports = router;
