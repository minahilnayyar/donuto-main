import express from "express"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();

router.get("/",(req,res)=>{
    res.render("signup");
})



export default router