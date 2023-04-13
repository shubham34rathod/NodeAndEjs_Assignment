let mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/base")
.then(()=>console.log("connection extablished"))
.catch(()=>console.log("connection error"))

let Schema1=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,unique:true},
    boolean:{type:Boolean,default:null}
})

let Model1=mongoose.model("storage",Schema1);

module.exports={Model1}