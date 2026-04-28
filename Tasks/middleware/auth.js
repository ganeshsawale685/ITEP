import jwt from "jsonwebtoken";

export const auth = async (request,response,next)=>{
  try{
    if(request.headers.authorization){
       let token = request.headers.authorization.split(" ")[1]; 
       console.log(token);
       await jwt.verify(token,"123kbjajdfbkafbarfbrg234ads2");
       console.log("Token Successfully Verified.....");
       
       next(); 
    }
    else 
      throw new Error();
  }
  catch(err){
    console.log(err);
    return response.status(401).json({error: "Unauthorized Access"});
  }
}