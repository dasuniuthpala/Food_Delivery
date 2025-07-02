import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://dasuniuthpala2002:VVKnKajk1LTuqs4P@cluster0.zog8jqz.mongodb.net/food-del').then(()=>console.log("DB Connected"));

}