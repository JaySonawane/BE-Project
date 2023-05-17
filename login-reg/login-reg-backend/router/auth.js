import express from "express";
import "../db/conn.js";
import User from "../model/userSchema.js";
import bcrypt from "bcryptjs";
const router = express.Router();
import cookie from 'cookie';
import jwt from 'jsonwebtoken';


router.get('/', (req, res) => {
    res.send("Router Home Page");
})


router.post('/signup', async (req, res) => {
    const { username, email, number, password, cpassword } = req.body;
    if (!username || !email || !number || !password || !cpassword) {
        return res.status(422).json({ message: 'All fields are required' });
    }

    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ message: 'Email address is already registered' });
        }
        const user = new User({ username, email, number, password, cpassword });
        if (password === cpassword) {
            const userRegister = await user.save();

            if (userRegister) {
                return res.status(201).json({ message: "Registration Successful" });
            }
            else {
                return res.status(422).json({ message: "Registration Unsuccessful" });
            }
        }
        else {
            return res.status(422).json({ message: 'Password Does Not Match' });
        }


    } catch (err) {
        console.log("auth err");
        console.log(err);
    }

    //console.log(req.body);
    //res.json({message:req.body})
})

router.post("/signin", async (req, res) => {
    let token;
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(422).json({ message: "Pls fill the fields properly" });
        }
        const userLogin = await User.findOne({ email });
        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);
            token = await userLogin.generateAuthToken();

            //res.cookie("jwt", token);
        

            if (!isMatch) {
                res.status(422).json({ message: "Invalid Credentials" });
            }
            else {

                res.json({ message: "users sign in successful",token });
            }
        }
        else {
            res.status(422).json({ message: "Invalid Credentials" });
        }
    } catch (err) {
        console.log(err);
    }




    //console.log(req.body);
    //res.json({ message: req.body });
})

export default router;



//USING PROMISES
    // User.findOne({ email: email })
    //     .then((userExist) => {
    //         //checking if email already exists in database
    //         if (userExist) {
    //             res.status(422).json({ error: "User Already Exists" });
    //         }
    //         else{
    //             const user = new User({ username, email, number, password, cpassword });
    //             //saving in database
    //             user.save()
    //                 .then(() => {
    //                     res.status(201).json({ message: "User successfully registered" });
    //                 }).catch((err) => {
    //                     res.status(500).json({ error: "Failed to Register" });
    //                 })
    //         }

    //     }).catch((err) => {
    //         console.log(err);
    //     })