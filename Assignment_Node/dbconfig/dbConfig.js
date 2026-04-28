import {Sequelize } from 'sequelize'

const sequelize = new Sequelize("foodorder","root","G@nesh123",{
    host:"localhost",
    dialect:"mysql"
})

sequelize.sync()
.then((res)=>{
    console.log("Database Connected")
})
.catch((err)=>{
    console.log("Connection Failed")
})
export default sequelize;