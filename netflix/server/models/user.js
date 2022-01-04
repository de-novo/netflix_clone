import mongoose from "mongoose";
import crypto from "crypto";
import config from "../config/index.js";
import jwt from "jsonwebtoken";
const userSchema = new mongoose.Schema({
    _id: Number,
    // idToken: String,
    // tokenType: String,
    Email: String,
    password: String,
    data: { checkPrivacy: Boolean, checkAlram: Boolean, salt: String },
    // data: Object
    profile:[{name:String}]
});

userSchema.statics.deleteUser = async function (conditions) {
    let x = this
    await User.findOneAndDelete(conditions);
};

userSchema.statics.modifyUser = async function (conditions, user) {
    const userRecord = await User.findOneAndUpdate(conditions, user, {
        new: true,
        upsert: true,
    });
    return userRecord;
};

// const createSalt = () =>
//     new Promise((resolve, reject) => {
//         crypto.randomBytes(64, (err, buf) => {
//             if (err) reject(err);
//             resolve(buf.toString('base64'));
//         });
//     });

userSchema.statics.enCrypto = (plainPassword) => {
    return new Promise(async (resolve, reject) => {
        const salt = await crypto.randomBytes(64).toString("base64");
        // const salt = await createSalt();
        crypto.pbkdf2(plainPassword, salt, 10000, 64, "sha512", (err, key) => {
            if (err) reject(err);

            resolve({ password: key.toString("base64"), salt });
        });
    });
};

userSchema.statics.deCrypto = (plainPassword, password, salt) => {
    return new Promise(async (resolve, reject) => {
        crypto.pbkdf2(plainPassword, salt, 10000, 64, "sha512", (err, key) => {
            if (err) reject(err);
               
            resolve({ isLogin: password === key.toString("base64") });
        });
    });
};

userSchema.methods.generateAccessToken = async function() {
    const user = this;

    const accessToken = await jwt.sign(
        {
            _id: user._id,
            Email: user.Email,
        },
        config.ACCESS_TOKEN_SECRET,
        {
            expiresIn: "1h",
        }
    );
    return accessToken;
};
userSchema.methods.generateRefreshToken =async function() {
    const user = this;
    const refreshToken = await jwt.sign(
        {
            _id: user._id,
            Email: user.Email,
        },
        config.REFRESH_TOKEN_SECRET,
        {
            expiresIn: "2w",
        }
    );
    return refreshToken;
};

// userSchema.static.deCrypto = (plainPassword, salt) => {};

const User = mongoose.model("User", userSchema);
export { User };
