const YouTube = require('../models/youtube.model').YouTube;
const env = require('../environment');
const got = require('got');

exports.youTubeSave = (req, res) => {
  const myData = new YouTube(req.body);
  myData.save()
    .then(item => {
      res.send('Saved');
    })
    .catch(err => {
      res.status(400).send('unable to save to database');
    });
}


exports.getPlaylist = async (req, res) => {
  const APIBase = 'https://youtube.googleapis.com/youtube/v3/playlistItems'

  const Params = {
    'part': 'part=snippet&part=contentDetails&part=id&part=status',
    'playlistId': 'playlistId=' + req.params.playlistId,
    'key': 'key=' + env.YTKey,
    'maxResults': 'maxResults=50',
    'pageToken': 'pageToken='
  }
  const API = `${APIBase}?${Params.part}&${Params.playlistId}&${Params.key}&${Params.maxResults}`

  try {
    let nextPageToken = ''

    do {
      const response = await got(API + nextPageToken);
      let playlist = JSON.parse(response.body)
      playlist.playlistId = req.params.playlistId;
      let myData = new YouTube(playlist);
      await myData.save()
      nextPageToken = myData.nextPageToken === undefined ? '' : '&pageToken=' + myData.nextPageToken;
    } while (nextPageToken !== '')

    res.send('Done');
  } catch (error) {
    console.log(error.response.body);
  }
}

exports.extractPlaylist = async (req, res) => {
  try {
    let ytList = []
    const yt = await YouTube.find({ 'playlistId': req.params.playlistId }, ['items.snippet.title', 'items.contentDetails']);
    // res.send(yt);
    for (let video of yt) {
      ytList = ytList.concat(
        video.items.map((item) => (
          {
            'title': item.snippet.title,
            'videoId': item.contentDetails.videoId,
            'videoPublishedAt': item.contentDetails.videoPublishedAt
          }
        )))
    }


    res.send(ytList);
  } catch (error) {
    console.log(error.response.body);
  }
}