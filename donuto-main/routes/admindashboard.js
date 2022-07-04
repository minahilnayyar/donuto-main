import express from "express"
import Donut from "../models/Donut.js";

const router = express.Router();

router.get("/",(req,res)=>{
    res.render("admindashboard");
});

router.post("/add", async (req,res)=>{

    const newDonut = new Donut(req.body)
    
    try{
        const savedDonut = await newDonut.save();
        res.status(200).json(savedDonut);   

    }catch(err){
res.status(500).json(err)
    }
});





export default router