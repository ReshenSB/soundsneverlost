var express = require('express');
var router = express.Router();
const YouTubeAPIS = require('../apis/youtube.api')


router.post('/youtube/save', YouTubeAPIS.youTubeSave);

module.exports = router