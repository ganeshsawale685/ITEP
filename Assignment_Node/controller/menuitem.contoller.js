import Menu from "../model/menu.model.js";
import Restaurant from "../model/restaurants.model.js";

export const show =async (request,response,next)=>{
   try {
      
    let{restaurantId}=request.params;
     let restaurant = await Restaurant.findOne({where: {id:restaurantId},include:Menu});
    if(!restaurant){
        return response.status(401).json({error:"Restaurant is not Exist"})
    }
    else{
        response.status(200).json({
      restaurant: restaurant.name,
       address: restaurant.address,
      menuItems: restaurant.menus
    })
    }
    
   } catch (error) {
    response.status(500).json({
      message: "Internal Server Error"
    })
   }
    
}

export const add = async(request,response,next)=>{
   try {

     let{name,price} = request.body;
     let{restaurantId}=request.params;
    // console.log(restaurantId)
    let restaurant = await Restaurant.findByPk(restaurantId)
    if(restaurant){
        Menu.create({name,price,restaurantId})
        .then((res)=>{
            return response.status(200).json(res);
        })
        .catch((err)=>{
            return response.status(500).json(err)
        })
    }
    
   } catch (error) {
    response.status(500).json({
      message: error.message
    })
   }
    
}