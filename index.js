const express = require('express');
const cors = require('cors');
const cookie = require('cookie-parser');
const anime = require('./anime.controller');
const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
    origin: "*",
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookie());
app.get("/", (req, res) => {
    res.send(`<h1
    style="display: flex; justify-content: center; align-items: center; width: 100%; min-height: 100vh; margin: 0; padding: 0; font-size: 7rem;">
    App Anime Server</h1>`);
});

app.get("/anime/list", anime.list);
app.post("/anime/add", anime.create);
app.put("/anime/update/:animeId", anime.update);
app.delete("/anime/delete/:animeId", anime.delete);
app.get('*', (req, res) => {
    res.status(404).send(`<h1
        style="display: flex; justify-content: center; align-items: center; width: 100%; min-height: 100vh; margin: 0; padding: 0; font-size: 7rem;">
        404 Not Found</h1>`);
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
