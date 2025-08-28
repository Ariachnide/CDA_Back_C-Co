import express from "express";
import jokes from "../controllers/jokeCtrl.js";

const router = express.Router();

router
    .route("/")
    .get(jokes.listJokes)
    .post(jokes.postJoke);

router
    .route("/:id")
    .get(jokes.getJokeById);

router
    .route("/random")
    .get(jokes.getRandomJoke);

router
    .route("/delete/:id")
    .get(jokes.deleteJoke);

export default router;
