import { Component } from "react";
import Data from "./Data";

class Product extends Component{
    constructor(){
        super();
      

        this.card={
            boxShadow: "10px 10px 10px 10px grey",
            width :"100%",
            display:"flex",
            paddind:"10px",
            margin:"20px",
            background:"royalblue",
            color:"white"
        }
        this.details={
            padding:"10px",
            width:"100%",
            

        }
        this.buyBtn={
            padding:"15px",
            background:"yellow",
            border:"none",
            marginRight:"10px"

        }
        this.cartBtn={
            padding:"15px",
            color:"white",
            background:"darkgrey",
            border:"none"
            
        }
        this.state={
            product : Data.products
        }
        console.log(this.state.product)
    }
    render(){
        return <>
       <center> <h1>Product Detail</h1></center>
        <div margin="0px">
            {this.state.product.map((item,index)=>{
                return <div key={item.id} style={this.card}>
                   <img src={item.images[0]} height="300px" width="300px"  />
                   <div style={this.details}>
                    <h3>{item.title}</h3>
                     <p><b>Description:</b>{item.description}</p>
                     <p><b>Category :</b>{item.category}</p>
                     <p><b>Price:</b> Rs.{item.price}</p>
                     <p><b>Warrenty:</b>{item.warrantyInformation}</p>
                     <p><b>Rating:</b>{item.rating}</p>
                     <button style={this.buyBtn}>Buy Now</button>
                     <button style={this.cartBtn}>Add To Cart</button>
                   </div>
                   
                </div>
            })}
        </div>
        
        </>
    }
}

export default Product