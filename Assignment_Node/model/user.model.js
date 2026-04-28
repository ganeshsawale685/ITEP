import { DataTypes } from "sequelize";
import sequelize from "../dbconfig/dbConfig.js";

const User = sequelize.define("users", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contact :{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    }
})

sequelize.sync()
    .then((res) => {
        console.log("User Table is Created")
    })
    .catch((err) => {
        console.log("Not created")
    })

export default User