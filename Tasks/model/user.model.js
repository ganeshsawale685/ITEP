import { DataTypes } from "sequelize";
import sequelize from "../dbConfig/dbconfig.js";

const User = sequelize.define("users",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    role: {
    type: DataTypes.ENUM("student", "instructor"),
    defaultValue: "student"
  }

})

sequelize.sync()
.then(res => console.log("User Table created"))
.catch(err => console.log("User Table not created"))

export default User;