import express from "express"
import User from "../models/Users.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();

router.get("/",(req,res)=>{
    res.render("login");
})

router.post('/log', async (req, res, next) => {
	User.findOne({ email: req.body.email }, (err, data) => {
		if (data) {

			if (data.password == req.body.password) {
				req.session.userId = data.unique_id;
				res.send({ "Success": "Success!" });
			} else {
				res.send({ "Success": "Wrong password!" });
			}
		} else {
			res.send({ "Success": "This Email Is not regestered!" });
		}
	});
});



// router.post("/login",async (req,res,next)=>{
//     try{
//         const salt = bcrypt.genSaltSync(10);
//         const hash = bcrypt.hashSync(req.body.password, salt);
// const newUser = new Users({
   
//     email:req.body.email,
//     password:hash,
// })
// await newUser.save()
// res.status(201).send("User has been authenticated")
//     }
//     catch(err){
// next(err)
//     }
// });

export default router