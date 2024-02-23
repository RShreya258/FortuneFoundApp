const mongoose = require('mongoose');

const pickupSchema = new mongoose.Schema({
    location :{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true,
        validate:{
            validator:function(v){
                return /^\d{10}$/.test(v.toString());
            },
            message:'Invalid Contact number',
        },
    },
    date:{
        type:String,
        required:true,
        // validate:{
        //     validator:function(v){
        //         return this.isNaN(v);
        //     },
        //     message:'Invalid date',
        // },
    },
    time:{
        type:String,
        required:true,
        validate:{
            validator:function(v){
                return /^([01]\d|2[0-3]):[0-5]\d$/.test(v)
            },
            message:'Invalid time format(HH:mm)',
        },
    },
    email:
    {
        type:String,
        required:true,
    }
});

mongoose.model('Pickup',pickupSchema)