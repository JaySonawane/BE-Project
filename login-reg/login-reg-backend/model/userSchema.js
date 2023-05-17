import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
})

//encodes the password for security purposes
userSchema.pre("save", async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }
    next();
})

//generation of a token
userSchema.methods.generateAuthToken = async function () {
    try {
        const payload = {
            id: this._id,
        };
        const secret = "8N4zB$Pu#TfH&cV7^Ys@EgCmKj6A*U2W";
        let token = jwt.sign(payload, secret);
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;

    } catch (err) {
        console.log(err);
    }
}

const User = mongoose.model('infos', userSchema); //(collection_name,userSchema)
export default User;
