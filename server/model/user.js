import mongoose from "mongoose";


const UserSchema=mongoose.Schema({
    uid:{type:String,require:true},
    email:{type:String},
    displayName:{type:String},
    photoURL:{type:String},
    emailVerified:{type:Boolean}
})


let Users=mongoose.model("user",UserSchema)

export default Users