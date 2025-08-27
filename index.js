import express from "express";
import { connectDB } from "./db.js";
import jokeRouter from "./routes/jokes.js";
import cors from "cors";

const app = express();
const PORT = 8080;

connectDB();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World from Express!");
});

app.use("/blagues/", jokeRouter);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
