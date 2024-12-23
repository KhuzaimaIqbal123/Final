import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/User.js";

dotenv.config();


const router = express.Router();

router.get("/",async(req,res)=>{
    res.send("Hello World");
});

router.post("/signup", async(req,res)=>{
    try{
        console.log(req.body); // Log the request body

    const {username,password} = req.body;
    const existingUser= await User.findOne({username});
    if(existingUser){
        return res.status(400).send({error:"Username already exists"});
    }
    const hashedPassword = await bcrypt.hash(password,12);
    console.log(hashedPassword); // Log the hashed password

    const user = new User({
        username,
        password:hashedPassword,
        });
        await user.save();
        res.status(201).json(user);
    }catch(err){
        console.error(err);
        res.status(500).send({error:"Internal Server Error"});
        }
        });

        router.post('/login',async(req,res)=>{
            try{
                const {username,password} = req.body;
                const user = await User.findOne({username});
                if(!user){
                    return res.status(400).send({error:"Invalid username or password"});
                }
                    const isValidPassword = await bcrypt.compare(password,user.password);
                    if(!isValidPassword){
                        return res.status(400).send({error:"Invalid username or password"});
                    }   
                        const token = jwt.sign({userId:user._id},process.env.JWT_SECRET,{
                            expiresIn:"1h"});
                            res.status(200).json({user,token});

            } catch(err){
                console.error(err);
            res.status(500).send({error:"Internal Server Error"});
            }
                    
        });


export default router;
