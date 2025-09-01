import express from "express";
import { connectDB } from "./db.js";
import jokeRouter from "./routes/jokes.js";
import cors from "cors";
import swaggerjsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import swaggerOptions from "./swaggerConfig.js";

const app = express();
const PORT = 8080;

connectDB();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

const swaggerDocs = swaggerjsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get("/", (req, res) => {
  res.send("Hello World from Express!");
});

app.use("/", jokeRouter);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
