import { response } from "express";
import User from "../model/user.model.js"
import bcrypt from "bcryptjs";

export const update =async(request,response,next)=>{
    try{
        let {id} = request.params;
        let {name,email,password} = request.body;
        let student = await User.findOne({where:{
            id:id,
            role:"student"
        }})
         let saltKey = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password,saltKey);
        if(!student){
       return response.status(404).json({error: "Student not found"});
        }
        await User.update({name,email,password},{where:{id,role:"student"}})
         return response.status(200).json({message: "User updated"});
    }catch(err){
        return response.status(500).json({error: "Internal Server Error"});
    }
}

export const fetchAll =async(request,response,next)=>{
    try {
        let student = await User.findAll({where:{role :"student"}})
        return response.status(200).json(student);
    } catch (err) {
        return response.status(500).json({error: "Internal Server Error"});
    }
}

export const fetchOne = async(request,response,next)=>{
    try {
        let {id} = request.params;
        let student = await User.findOne({where:{
            id:id,
            role:"student"
        }})
        return response.status(200).json(student);
    } catch (err) {
        return response.status(500).json({error: "Internal Server Error"});
    }
}