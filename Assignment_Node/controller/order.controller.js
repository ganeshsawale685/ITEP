import Order from "../model/order.model.js";
import User from "../model/user.model.js";

// export const orderMenu = async(request,rersponse,next)=>{
    
// }

export const orderId = async (request,response,next)=>{
    try {
        let {id} = request.params;
        let order = await Order.findByPk(id);

        return response.status(200).json(order);

        
    } catch (error) {
         return response.status(500).json({error:"Internal server error"})
    }
}

export const showOrder =async (request,response,next)=>{
   try {
    let {userId} = request.params;
    let order = await Order.findAll({where:{userId}})
    console.log(order)
    return response.status(200).json(order);
   } catch (error) {
    return response.status(500).json({error:"Internal server error"})
   }
}


export const placeOrder =async(request,response,next)=>{
 try {
    let {userId} = request.params;
    let {item,price} = request.body;

    let order =await Order.create({item,price,userId});
  
    return response.status(200).json({message:"Order is Place",order})

 } catch (error) {
    return response.status(500).json({error:"Internal server error"})
 }
    
}

