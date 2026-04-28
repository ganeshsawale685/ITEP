import Menu from "../model/menu.model.js";
import Restaurant from "../model/restaurants.model.js";

export const menus =async (request,response,next)=>{
    try {
      
    let{id}=request.params;
     let restaurant = await Restaurant.findOne({where: {id},include:Menu});
    if(!restaurant){
        return response.status(401).json({error:"Restaurant is not Exist"})
    }
    else{
        response.status(200).json({
      restaurant: restaurant.name,
      menuItems: restaurant.menus
    })
    }
    
   } catch (error) {
    response.status(500).json({
      message: "Internal Server Error"
    })
   }
}

export const getAll =(request,response,next)=>{

    Restaurant.findAll({include:Menu})
    .then((res)=>{
        return response.status(200).json(res)
    })
    .catch((err)=>{
        return response.status(500).json(err)
    })

        
 
}

export const create = (request,response,next)=>{
    let{name,address} = request.body;
    Restaurant.create({name,address})
    .then((res)=>{
        return response.status(200).json(res);
    })
    .catch((err)=>{
        return response.status(500).json({error:"Internal Server Error"})
    })
}

