const mongoose = require('mongoose');

const FooddetailsSchema = new mongoose.Schema({
    types :{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true,
    },
    hours:{
        type:Number,
        required:true,

    },
    email:
    {
        type:String,
        required:true,
    },
    ngoname:
    {
        type:String,
        required:true,
    }

});

mongoose.model('fooddetail',FooddetailsSchema)