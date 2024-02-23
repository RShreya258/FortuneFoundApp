const express = require('express')
const session = require('express-session');

// Create a model for the schema-less collection
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const {jwtkey} = require('../keys')
const router = express.Router();
const DynamicModel = require('../models/DynamicModel');

// const DynamicModel = mongoose.model('DynamicModel');

router.post('/history',async (req,res)=>{
       
    const {comp} = req.body;

    try{

      const di = new DynamicModel({comp});

      await di.save();
      res.status(200).send(message ="OK")

    }catch(err){
      return res.status(422).send(err.message)
    } 
});


router.get('/history/:email', (req, res) => {
    const email = req.params.email;

    // Find documents with the specified email
    DynamicModel.find({ email: email }, (err, documents) => {
        if (err) {
            console.error('Error fetching documents:', err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(documents);
            res.send(documents);
        }
    });
});
// Save the document to the collection
router.use(express.json())

module.exports = router