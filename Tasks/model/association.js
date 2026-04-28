import Course from "./course.model.js";
import Enroll from "./enrollment.model.js";
import Lesson from "./lessons.model.js";
import User from "./user.model.js";



User.hasMany(Course);
Course.belongsTo(User);


User.belongsToMany(Course,{through:Enroll});
Course.belongsToMany(User,{through:Enroll})

Course.hasMany(Lesson, { foreignKey: "courseId" });
Lesson.belongsTo(Course, { foreignKey: "courseId" });
