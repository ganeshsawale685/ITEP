import Product from "./product.model.js";
import Reviews from "./reviews.model.js";
import User from "./user.model.js";
Product.hasMany(Reviews);
Reviews.belongsTo(Product);