import { DataTypes } from "sequelize";
import sequelize from "../dbconfig/dbConfig.js";

const Order = sequelize.define("orders",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    item:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    price:{
        type:DataTypes.INTEGER,
        allowNull:false,
    }
})

sequelize.sync()
.then((res)=>{
    console.log("Order Table Created")
})
.catch((err)=>{
    console.log("Order Table not created")
})

export default Order;