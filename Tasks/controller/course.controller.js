
import { response } from "express";
import Course from "../model/course.model.js";
import { where } from "sequelize";

export const deleteCourse= async (request,response,next)=>{
    let {id} = request.params;
      let course = await Course.findByPk(id);

    if(!course){
        return response.status(404).json({message:"No Course Available"});
    }

    await Course.destroy({where:{id}})
    return response.status(200).json({message:"Course Deleted Successful",course})
}

export const updateCourse = async (request,response,next)=>{
    try {

    let {id}= request.params;

    let course = await Course.findByPk(id);

    if(!course){
        return response.status(404).json({message:"No Course Available"});
    }

    await course.update(request.body);

    return response.status(200).json({
        message:"Course Updated",
        course
    });

    } catch (error) {
    console.log(error);   // terminal me actual error show karega
    return response.status(500).json({
        error: error.message
    });
}
}


export const oneCourse = async(request,response,next)=>{
  try {
    let {id}= request.params;
    let course = await Course.findByPk(id);
     return response.status(200).json(course)

  } catch (error) {
    return response.status(500).json({error: "Internal Server Error"});
  }
}



export const courseShow =async(request,response,next)=>{
    try {
        let course = await Course.findAll({raw:true});
        return response.status(200).json({message :"All Course",course})
    } catch (error) {
        return response.status(500).json({error: "Internal Server Error"});
    }
}


export const courseAdd = async(request,response,next)=>{
   try {
     let {title,detail,price} = request.body;
    let course = await Course.create({title,detail,price});
    return response.status(200).json({message :"Course Created",course})
   } catch (error) {
    return response.status(500).json({error: "Internal Server Error"});
    
   }

}


