import { DataTypes } from "sequelize";
import sequelize from "../dbconfig/dbConfig.js";

const Restaurant = sequelize.define("restaurants",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    address :{
        type:DataTypes.STRING,
        allowNull:false
    }
})

sequelize.sync()
.then((res)=>{
    console.log("Restaurant Table created")
})
.catch((err)=>{
    console.log("Table ")
})
export default Restaurant;