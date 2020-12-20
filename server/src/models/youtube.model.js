const mongoose = require("mongoose");

const playlistItemsSchema = new mongoose.Schema({
    "kind": String,
    "etag": String,
    "id": String,
    "snippet": {
        "publishedAt": Date,
        "channelId": String,
        "title": String,
        "description": String,
        "thumbnails": {
            "default": {
                "url": String,
                "width": Number,
                "height": Number
            }
        },
        "channelTitle": String,
        "playlistId": String,
        "position": Number,
        "resourceId": {
            "kind": String,
            "videoId": String,
        }
    },
    "contentDetails": {
        "videoId": String,
        "startAt": String,
        "endAt": String,
        "note": String,
        "videoPublishedAt": Date
    },
    "status": {
        "privacyStatus": String
    }
}
);

const playlistSchema = new mongoose.Schema({
    "kind": String,
    "etag": String,
    "nextPageToken": String,
    "prevPageToken": String,
    "pageInfo": {
        "totalResults": Number,
        "resultsPerPage": Number
    },
    "items": [playlistItemsSchema]
});


exports.YouTube = mongoose.model("youtubes", playlistSchema);