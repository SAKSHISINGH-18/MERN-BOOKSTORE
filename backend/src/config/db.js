import  mongoose from "mongoose"
export const connectDB =async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MONGODB CONNECTED SUCESSFULY")
    }catch(error){
        console.log("ERROR connecting to MONGODB",error)
        process.exit(1)
    }
}