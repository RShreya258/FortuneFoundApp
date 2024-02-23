const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const {jwtkey} = require('../keys')
const router = express.Router();
const fooddetail = mongoose.model('fooddetail');


router.post('/fooddetail',async (req,res)=>{
   
    const {types,quantity,hours,email,ngoname} = req.body;
    console.log(req.body);
    console.log(ngoname);

    try{

      const food = new fooddetail({types,quantity,hours,email,ngoname});

      await food.save();
      res.status(200).send(message ="OK")

    }catch(err){
      return res.status(422).send(err.message)
    }
    
    
})

router.get('/fooddetail/:email', async (req, res) => {
  try {
      const email = req.params.email;
      // Query the MongoDB collection using Mongoose
      const foods = await fooddetail.find({ email: email });

      // Check if any food data is found
      if (foods.length === 0) {
          return res.status(404).json({ message: 'No food data found for the provided email ID' });
      }
      console.log(foods);
      // Send the retrieved food data as a response
      res.send(foods);
  } catch (error) {
      console.error('Error fetching food data:', error);
      res.status(500).json({ message: 'Internal Server Error' });
  }
});


module.exports = router