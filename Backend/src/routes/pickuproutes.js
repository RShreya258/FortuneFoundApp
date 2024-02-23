const express = require('express')
const mongoose = require('mongoose')
const router = express.Router();
const pickup = mongoose.model('Pickup');

router.post('/pickup',async (req,res)=>{
    const {location,contact,date,time,email} = req.body
    console.log(req.body);

    if(!location||!contact||!date||!time){
        return res.status(422).send({error :"must provide required details"})
    }
    try{
        const pick = new pickup({location,contact,date,time,email});
        await  pick.save();
        res.status(200).send(message ="OK")
        // const token = jwt.sign({userId:user._id},jwtkey)
        // res.send({token})
  
      }catch(err){
        return res.status(422).send(err.message)
      }
})


module.exports = router