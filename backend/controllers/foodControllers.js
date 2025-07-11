import foodModel from "../models/foodModel.js";
import fs from "fs";
import path from "path";

const addFood = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: "No image file uploaded" });
  }

  let image_filename = req.file.filename;

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });

  try {
    await food.save();
    res.json({ success: true, message: "Food Added" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error" });
  }
};

//list food
const listfood = async (req,res) => {
    try {
      const foods = await  foodModel.find({});
      res.json({success:true,data:foods})
    } catch (error) {
      console.log(error);
      res.json({success:false,message:"Error"})
    }
}

//remove food item

const removefood = async (req,res) => {
    try {
      const food = await foodModel.findById(req.body.id);
      if (!food) {
        return res.status(404).json({ success: false, message: "Food not found" });
      }
      const imagePath = path.join(process.cwd(), "uploads", food.image);
      fs.unlink(imagePath, (err) => {
        if (err) {
          console.log("Image deletion error:", err);
        }
      });
      await foodModel.findByIdAndDelete(req.body.id);
      res.json({success:true,message:"Food Removed"})
    } catch (error) {
      console.log(error);
      res.json({success:false,message:"Error"})
    }
}
export { addFood,listfood,removefood };