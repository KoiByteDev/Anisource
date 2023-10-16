import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); 

app.get("/", async (req, res) => {
    res.render("index.ejs");
});

app.post("/input", (req, res) => {
    userInput = req.body.search; 
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Server is Running on Port ${port}`);
});