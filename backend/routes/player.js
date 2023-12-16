const express = require('express');

const router= express.Router();

const playerInfoController = require('../controllers/player-info')

router.post('/player', playerInfoController.postPlayer);

router.get('/player/:playerName', playerInfoController.getPlayer);

module.exports = router;