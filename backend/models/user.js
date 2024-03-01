import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String },
    username: { type: String },
    email: { type: String },
    password: { type: String },
    phone: { type: Number },
    userId: { type: String },
    role: { type: String }
})

const SvskhdUser = mongoose.model("SUser", userSchema)
export default SvskhdUser