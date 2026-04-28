import User from "../model/user.model.js";

export const instAll =async(request,response,next)=>{
    try {
        let instructor = await User.findAll({where:{role :"instructor"}})
        return response.status(200).json(instructor);
    } catch (err) {
        return response.status(500).json({error: "Internal Server Error"});
    }
}


export const instOne = async(request,response,next)=>{
    try {
        let {id} = request.params;
        let instructor = await User.findOne({where:{
            id:id,
            role:"instructor"
        }})
        return response.status(200).json(instructor);
    } catch (err) {
        return response.status(500).json({error: "Internal Server Error"});
    }
}