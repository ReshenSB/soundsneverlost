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
      res.status(400).send("unable to save to database");
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
  // res.send(API)

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
    // let API = `${API}&${Params.pageToken}`

    res.send('Done');
  } catch (error) {
    console.log(error.response.body);
  }

  // got.get('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&part=contentDetails&part=id&part=status&playlistId=PLYjiM4siBjjxRah4AhbygLyfaU2mmVVhx&key=AIzaSyDd0tpHgGr0fehe1WfFfgmW5AJX_G8IZ8g&maxResults=5',

  //   (resp) => {
  //     res.send(resp);

  //   }).catch((err) => {
  //     console.log("Error: " + err.message);
  //     res.send("Error: " + err.message)
  //   });
}