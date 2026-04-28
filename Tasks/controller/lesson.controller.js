import { response } from "express";
import Lesson from "../model/lessons.model.js";


export const byId =async(request,response,next)=>{
  try {
    let {id}= request.params;
    let lesson =await Lesson.findByPk(id);
    return response.status(200).json(lesson);
  } catch (error) {
     return response.status(500).json({ error: "Internal Server Error" });
  }
}

export const allLesson = async (request, response, next) => {
  try {

    let lessons = await Lesson.findAll();

    return response.status(200).json({
      message: "All Lessons",
      lessons
    });

  } catch (error) {
    console.log(error);
    return response.status(500).json({ error: "Internal Server Error" });
  }
};

export const addLesson = async (request,response,next)=>{
  try {
    let {topic,courseId} = request.body;
    let lesson = await Lesson.create({topic,courseId})
    return response.status(200).json({message:"Lesson Created",lesson})
  } catch (error) {
    return response.status(500).json({error: "Internal Server Error"});
  }
}