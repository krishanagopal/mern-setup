import User from "../modals/user.model.js";

import{hashPassword}from "../utils/hash.js";

export const registerUser = async(req,res)={

    try{

      const { name,email,password} =req.body;

      if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }


      
        //check if user already exists
        const existingUser =await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message:"User already exists"});
        }

        //hash password
    } catch(error){
        console.error("Error in user registration:",error);
        res.status(500).json({message:"Server error"});
    }

}