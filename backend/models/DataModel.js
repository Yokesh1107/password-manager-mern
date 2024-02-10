const mongoose=require('mongoose')
const {model,Schema}=mongoose

const DataSchema=new Schema({
    social:{
        type:String,
        required:true,
    },
    userid:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
    }
})
const dataModel=model('data',DataSchema)
module.exports=dataModel