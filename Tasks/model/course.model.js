import { DataTypes } from "sequelize";
import sequelize from "../dbConfig/dbconfig.js";

const Course = sequelize.define("courses",{
    id :{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    detail:{
        type:DataTypes.STRING,
        allowNull:false
    },
    price:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

sequelize.sync()
.then(res => console.log("Course Table is Created"))
.catch(err => console.log("Course Table is not created"))

export default Course;