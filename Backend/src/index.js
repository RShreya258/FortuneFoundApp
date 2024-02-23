const express  = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
const PORT = 3000
const {mogoUrl} = require('./keys')
app.use(express.json())

require('./models/User');
// require('./models/DynamciModel');
require('./models/pickup');
require('./models/fooddetail');


const requireToken = require('./middleware/requireToken')
const authRoutes = require('./routes/authRoutes')
const historyroutes = require('./routes/historyroutes')
const pickuproute = require('./routes/pickuproutes')
const foodroutes = require('./routes/foodRoutes')

app.use(bodyParser.json())
app.use(authRoutes);
app.use(pickuproute);
app.use(historyroutes);
app.use(foodroutes);


mongoose.connect(mogoUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.on('connected',()=>{
    console.log("connected to mongo yeahh")
})

mongoose.connection.on('error',(err)=>{
    console.log("this is error",err)
})



app.get('/',requireToken,(req,res)=>{
    res.send({email:req.user.email})
})

app.listen(PORT,()=>{
    console.log("server running "+PORT)
})