import bcrypt from 'bcryptjs' 
import User from "../model/user.model.js";



export const register =async(request,response,next)=>{
  try {
      let {name,email,password,contact}=request.body;
    let saltKey = await bcrypt.genSalt(10);

    let pass = await bcrypt.hash(password,saltKey);
    let user = await User.create({name,email,password:pass,contact});
    return response.status(200).json({message:"User created",user})
    
  } catch (error) {
    return  response.status(500).json({error:"Internal Server error"})
  }
}

export const users = async(request,response,next)=>{
    try {
    let {id} = request.params;
    console.log(id)
    let users = await User.findByPk(id)
    return response.status(200).json(users);
    } catch (error) {
        return  response.status(500).json({error:"Internal Server error"})
    }
}