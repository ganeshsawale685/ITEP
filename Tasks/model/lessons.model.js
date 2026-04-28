import { DataTypes } from "sequelize";
import sequelize from "../dbConfig/dbconfig.js";


const Lesson = sequelize.define("lessons",{
    id :{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    topic :{
        type:DataTypes.STRING,
        allowNull:false
    },
   courseId:{
 type:DataTypes.INTEGER,
 allowNull:false
}

})

sequelize.sync()
.then(res=> console.log("Lesson Table created"))
.catch(err=>console.log("Lesson Table not created"))

export default Lesson;