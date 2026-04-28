import { DataTypes } from "sequelize";
import sequelize from "../dbconfig/dbConfig.js";

const Menu = sequelize.define("menus",{
    id :{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name :{
        type:DataTypes.STRING,
        allowNull:false
    },
    price :{
        type:DataTypes.INTEGER,
        allowNull:false
    }
})

sequelize.sync()
.then((res)=>{
    console.log("Menu Table Created")
})
.catch((err)=>{
    console.log("Not Created")
})

export default Menu;