const YouTube = require('../models/youtube.model').YouTube

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