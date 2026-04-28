import { DataTypes } from "sequelize";
import sequelize from "../db/dbConfig.js";

const Reviews = sequelize.define("reviews",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    rating: DataTypes.INTEGER,
    comment: DataTypes.STRING,
    date: DataTypes.STRING,
    reviewerName: DataTypes.STRING,
    reviewerEmail: DataTypes.STRING
});
export default Reviews;