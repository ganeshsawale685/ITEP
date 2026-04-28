import { Sequelize } from "sequelize";

const sequelize = new Sequelize("taskolp","root","G@nesh123",{
    host:"localhost",
    dialect:"mysql"
})

sequelize.sync()
.then((res)=>{
    console.log("Database is connected")
})
.catch((err)=>{
    console.log("Not connected")
})

export default sequelize;