var express = require('express');
var router = express.Router();
const YouTubeAPIS = require('../apis/youtube.api')

// Routes
router.post('/youtube/save', YouTubeAPIS.youTubeSave);
router.get('/youtube/playlist/:playlistId', YouTubeAPIS.getPlaylist);

module.exports = router