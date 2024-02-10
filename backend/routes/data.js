const router = require('express').Router()
const { default: mongoose } = require('mongoose')
const Data=require('../models/DataModel')
const dataModel = require('../models/DataModel')
require('dotenv').config()
const secret=process.env.SECRET

router.post('/new/:id',async(req,res)=>{
    const {id}=req.params
    const {token}=req.cookies
    const {socialmedia,userid,password}=req.body
    const dataDetails=new Data({social:socialmedia,userid:userid,password:password,username:id})
    const data=await dataDetails.save()
    return res.status(200).json("SUCCESSFULL")
})
router.get('/:id',async(req,res)=>{
    const {id}=req.params
    const data=await dataModel.find({username:id})
    res.json(data)
})
router.put('/delete/:id',async(req,res)=>{
    const {id}=req.params
    const data=await dataModel.deleteOne({social:req.body.social,userid:req.body.userid,password:req.body.password,username:id})
    res.status(200).json(data)
})
router.get('/edit/:id',async(req,res)=>{
    const {id}=req.params
    const data=await dataModel.find({_id:id})
    res.status(200).json({social:data[0].social,userid:data[0].userid,password:data[0].password})
})
router.put('/update',async(req,res)=>{
    const {id,social,password,userid}=req.body
    const data=await dataModel.findById(id)
    await data.updateOne({social:social,password:password,userid:userid})
    res.status(200).json('Updated')
})
module.exports=router