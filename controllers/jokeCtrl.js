import Joke from "../models/jokes.js";

const postJoke = async(req, res) => {
    const newJoke = await Joke.create({
        question: req.body.question,
        answer: req.body.answer
    });
    res.status(201).json({
        error: false, 
        message: "Joke has been created", 
        result: newJoke
    });
};

const listJokes = async(req, res) => {
    const jokes = await Joke.findAndCountAll();
    res.status(200).json({
        error: false,
        message: "Jokes list has been fetched",
        result: jokes
    });
};

const getJokeById = async (req, res) => {
    const joke = await Joke.findByPk(req.params.id);
    res.status(200).json({
        error: false,
        message: `Joke with id ${req.params.id} has been fetched`,
        result: joke
    });
};

const getRandomJoke = async (req, res) => {
    const joke = await Joke.findAll({order: sequelize.random()});
    res.status(200).json({
        error: false,
        message: "A joke has been randomly fetched",
        result: joke
    });
};

export default {
    postJoke,
    listJokes,
    getJokeById,
    getRandomJoke
};
