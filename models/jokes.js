import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";

const Joke = sequelize.define('jokes', {
    question: {
        type: DataTypes.STRING(120),
        allowNull: false
    },
    answer: {
        type: DataTypes.STRING(180),
        allowNull: false
    }
});

export default Joke;
