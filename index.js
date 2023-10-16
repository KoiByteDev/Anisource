import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

let userInput = '';

app.get("/", async (req, res) => {
    try {
        const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${userInput}`);
        const result = response.data.data;
        console.log(result)
        const animeData = result.map(anime => ({
            title: anime.title,
            titleJP: anime.title_japanese,
            status: anime.status,
            airing: anime.airing,
            aired: anime.aired.string,
            epLength: anime.duration,
            rating: anime.rating,
            score: anime.score,
            rank: anime.rank,
            synopsis: anime.synopsis,
            background: anime.background,
            season: anime.season,
            year: anime.year,
        }));
        res.render("index.ejs", { animeData });
    } catch(error) {
        console.log("error");
        res.status(500)
    }
});

app.post("/input", (req, res) => {
    userInput = req.body.search;
    res.redirect("/")
})

app.listen(port, () => {
    console.log(`Server is Running on Port ${port}`)
});