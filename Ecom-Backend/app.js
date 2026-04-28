import express from "express"
import bodyParser from "body-parser";
import "./model/association.js"
import "./db/dbConfig.js"
import cors from "cors";
import CategoryRouter from "./routes/category.routes.js"
import ProductRouter from "./routes/product.route.js"
import UserRouter from "./routes/user.route.js";
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());
// http://localhost:3000/category
app.use("/category",CategoryRouter);
app.use("/product",ProductRouter);
app.use("/user",UserRouter);

app.listen(3000,()=>{
    console.log("server started...");
})