import Restaurant from "./restaurants.model.js";
import Menu from "./menu.model.js";
import User from "./user.model.js";
import Order from "./order.model.js";

Restaurant.hasMany(Menu);
Menu.belongsTo(Restaurant)

User.hasMany(Order)
Order.belongsTo(User)

