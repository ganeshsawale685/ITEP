import { Sequelize } from "sequelize";

const sequelize = new Sequelize("ecommercedb","root","G@nesh123",{
    host: "localhost",
    dialect: "mysql"
});
sequelize.sync()
.then(()=>{
    console.log("Database created...");
}).catch(err=>{
    console.log(err);
})
export default sequelize;