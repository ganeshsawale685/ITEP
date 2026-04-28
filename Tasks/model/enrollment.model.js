import { DataTypes } from "sequelize";
import sequelize from "../dbConfig/dbconfig.js";

const Enroll = sequelize.define("enrollments",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    }
}) 

sequelize.sync()
.then(res => console.log("Enrollment Table is Created"))
.catch(err => console.log("Enroll table not created"))

export default Enroll;