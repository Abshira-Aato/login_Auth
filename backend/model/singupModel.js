const mongoose= require("mongoose");

const NoteSchema = mongoose.Schema({
   
    userName:String,
    email :String,
    password :String,
})


module.exports=mongoose.model("User",NoteSchema)