import express from 'express'
import bodyParser from 'body-parser'
import UserRouter from './routes/user.route.js'
import StudentRouter from './routes/student.route.js'
import InstructorRouter from './routes/instructor.route.js'
import CourseRouter from './routes/course.route.js'
const app = express()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.use("/user",UserRouter)
app.use("/students",StudentRouter)
app.use("/instructors",InstructorRouter)

app.use("/products",(req,res,next)=>{
    res.send("Aanchal")
})

app.use("/courses",CourseRouter)


app.listen(3000,()=>{
    console.log("Server started...")
})