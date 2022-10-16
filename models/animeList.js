const mongoose = require('mongoose');

const AnimeListModel = mongoose.model('AnimeList', {
    name: String,
    image: String,
    url: String,
});

module.exports = AnimeListModel;