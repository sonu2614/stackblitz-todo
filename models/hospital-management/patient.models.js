import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
    {
        name:{
            type : String,
            required : true
        },
        age:{
            type : Number,
            required : true
        },
        bloodGroup:{
            type : String,
            required : true
        },
        gender:{
            type : String,
            required : true,
            enum:["M","F","O"],
        },

        diagonseWidth:{
            type : String,
            required : true
        },
        admittedIn:{
            type : mongoose.Schema.Types.ObjectId,
            ref:"Hospital"
        },
        address:{
            type : String,
            required : true
        }
    },{timestamps:true});

export const Patient = mongoose.model("Patient",patientSchema);