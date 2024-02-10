const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const bodyParser = require('body-parser')
const authRoutes=require('./routes/auth')
const dataRoutes=require('./routes/data')
const userModel = require('./models/UserModel')
const cookieParser=require('cookie-parser')

const app=express()
require('dotenv').config()
app.use(express.json())
app.use(cors({credentials:true,origin:'http://localhost:3000'}))
app.use(bodyParser.json({type: 'application/json'}));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.text({type: '*/*'}));
app.use(cookieParser())

/**PORT */
const PORT=2003||process.env.PORT

app.listen(PORT,()=>{
    console.log(`SERVER RUNNING ON ${PORT}`)
})

/**ROUTES */
app.use('/auth',authRoutes)
app.use('/data',dataRoutes)



/**DATABASE CONNECTION */
mongoose.connect(process.env.MONGO_DB,
    console.log("Database connected")
)
