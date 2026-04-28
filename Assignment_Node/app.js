import express from 'express'
import bodyParser from 'body-parser';
import RestaurantRouter from './routes/restaurants.route.js'
import UserRouter from './routes/user.route.js'
import OrderRouter from './routes/order.route.js'
import "./model/association.js";


const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use("/restaurants",RestaurantRouter)
app.use("/users",UserRouter)
app.use("/orders",OrderRouter)

app.listen(3000,()=>{
    console.log("Server is Listing to Port:3000")
})