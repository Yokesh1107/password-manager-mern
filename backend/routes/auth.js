const router = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/UserModel')
const jwt=require('jsonwebtoken')
require('dotenv').config()
const secret=process.env.SECRET

router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const newUser=await User.findOne({username:username})
    if(!newUser){
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    const userDetails = new User({
        username: username,
        password: hash
    })
    const user = await userDetails.save()
    res.status(200).json('registered')
}else{
    res.status(400).json('user already exists')
}
})
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username: username })
        if(!user){
            return res.status(400).json('no user')
        }
        const compare = bcrypt.compareSync(password, user.password)
        if (compare) {
            jwt.sign({exp:Math.floor(Date.now()/1000)+(60*60),username,id:user._id},secret,{},async(err,token)=>{
                if(err)throw err
                res.cookie('user',username)
                res.cookie('token',token).json('logged in')
            })
            // return res.status(200).json(user._id)
        }
    } catch (err) {
        res.status(500).json(err)
    }
})
router.post('/logout',async(req,res)=>{
    res.cookie('user','')
    res.cookie('token','').json('ok')
})

module.exports = router