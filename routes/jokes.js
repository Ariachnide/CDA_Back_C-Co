import express from "express";
import jokes from "../controllers/jokeCtrl.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Joke:
 *       properties:
 *         question:
 *           type: string
 *         answer:
 *           type: string
 */

/**
 * @swagger
 * /blagues/:
 *   get:
 *     summary: Get a list of jokes.
 *     description: Get a list of all registered jokes.
 *     responses:
 *       "200":
 *         description: A successful response
 *       "500":
 *         description: Internal server error
 *   post:
 *     summary: Create a new joke.
 *     description: Create a new joke with a question and an answer.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Joke"
 *     responses:
 *       "201":
 *         description: A succesfully created response
 *       "500":
 *         description: Internal server error
 */

router
    .route("/blagues/")
    .get(jokes.listJokes)
    .post(jokes.postJoke);

/**
 * @swagger
 * /blagues/{id}:
 *   get:
 *     summary: Get joke by ID.
 *     description: Get joke by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Joke ID
 *     responses:
 *       "200":
 *         description: A successful response
 *       "404":
 *         description: Joke not found
 *       "500":
 *         description: Internal server error
 */

router
    .route("/blagues/:id")
    .get(jokes.getJokeById);

/**
 * @swagger
 * /blagues/random:
 *   get:
 *     summary: Get a random joke.
 *     description: Get one joke chosen randomly amongst all existing jokes.
 *     responses:
 *       "200":
 *         description: A successful response
 *       "500":
 *         description: Internal server error
 */

router
    .route("/blagues/random")
    .get(jokes.getRandomJoke);

/**
 * @swagger
 * /blagues/delete/{id}:
 *   delete:
 *     summary: Delete joke by ID.
 *     description: Delete joke by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Joke ID
 *     responses:
 *       "200":
 *         description: A successful response
 *       "404":
 *         description: Joke not found
 *       "500":
 *         description: Internal server error
 */

router
    .route("/blagues/delete/:id")
    .get(jokes.deleteJoke);

export default router;
