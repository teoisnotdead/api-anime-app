const animeListModel = require('./models/animeList.js');

const AnimeCtrl = {
    list: async (req, res) => {
        try {
            const animeList = await animeListModel.find({});
            res.status(200).send(animeList);
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    },
    create: async (req, res) => {
        try {
            const anime = await animeListModel.create(req.body);
            res.status(201).send(anime);
        } catch (error) {
            res.status(500).send({ message: 'Error creating anime' });
        }
    },
    update: async (req, res) => {
        try {
            const anime = await animeListModel.findByIdAndUpdate(req.params.animeId, req.body, { new: true });
            res.status(200).send(anime);
        } catch (error) {
            res.status(500).send({ message: 'Error updating anime' });
        }
    },
    delete: async (req, res) => {
        try {
            const anime = await animeListModel.findByIdAndDelete(req.params.animeId);
            res.status(200).send(anime);
        } catch (error) {
            res.status(500).send({ message: 'Error deleting anime' });
        }
    }
};

module.exports = AnimeCtrl;