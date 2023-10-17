import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

let userInput = '';
let servFile = '/'

app.get("/", (req, res) => {
    res.redirect("/anime")
})

app.get("/anime", async (req, res) => {
    try {
        servFile = '/anime'
        const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${userInput}`);
        const result = response.data.data;
        console.log(result)
        const animeData = result.map(anime => ({
            image: anime.images.jpg.large_image_url,
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
        res.render("anime.ejs", { animeData });
    } catch(error) {
        console.log("error");
        res.status(500)
    }
});

app.get("/characters", async (req, res) => {
    try {
        servFile = '/characters'
        const response = await axios.get(`https://api.jikan.moe/v4/characters?q=${userInput}`);
        const result = response.data.data;
        console.log(result)
        const characterData = result.map(character => ({
            image: character.images.jpg.image_url,
            name: character.name,
            nameJP: character.name_kanji,
        }));
        res.render("characters.ejs", { characterData });
    } catch(error) {
        console.log("error");
        res.status(500)
    }
});


app.get("/manga", async (req, res) => {
    try {
        servFile = '/manga'
        const response = await axios.get(`https://api.jikan.moe/v4/manga?q=${userInput}`);
        const result = response.data.data;
        console.log(result)
        const mangaData = result.map(manga => ({
            image: manga.images.jpg.image_url,
            title: manga.title,
            titleJP: manga.title_japanese,
        }));
        res.render("manga.ejs", { mangaData });
    } catch(error) {
        console.log("error");
        res.status(500)
    }
});



app.post("/input", (req, res) => {
    userInput = req.body.search;
    res.redirect(`${servFile}`)
})

app.listen(port, () => {
    console.log(`Server is Running on Port ${port}`)
});