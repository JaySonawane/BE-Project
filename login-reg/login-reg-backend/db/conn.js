import mongoose from 'mongoose';
//mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://test:test1@cluster0.ctf1yky.mongodb.net/?retryWrites=true&w=majority").then(() => {
    console.log("Connection Successful");
}).catch((err) => {
    console.log(err); //connection unsuccessful
})
