import mongoose from "mongoose";

const medical_recoardSchema=new mongoose.Schema({},{timestamps:true});

export const MedicalRecoard = mongoose.model("MedicalRecoard",medical_recoardSchema);