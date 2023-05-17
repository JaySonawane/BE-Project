import express from "express";
import "./db/conn.js";
import cors from 'cors';
import router from './router/auth.js';
import cookieParser from "cookie-parser";

//dotenv.config({ path: "./.env " })
const app = express();
app.use(express.json());
app.use(cors());
app.use(router);
app.use(cookieParser());


const port = 5000;


/*app.get('/signin',(req,res) =>{
    res.send("Sign In page");
})

app.get('/register',(req,res)=>{
    res.send("Registration Page");
}) */
app.listen(port, function () {
    console.log("Server Running", port);
})