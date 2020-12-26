var express = require('express');
var router = express.Router();
const YouTubeAPIS = require('../apis/youtube.api')

// Routes
router.post('/youtube/save', YouTubeAPIS.youTubeSave);
router.get('/youtube/playlist/scrape/:playlistId', YouTubeAPIS.getPlaylist);
router.get('/youtube/playlist/extract/:playlistId', YouTubeAPIS.extractPlaylist);

module.exports = router