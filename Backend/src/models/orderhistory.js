const mongoose = require('mongoose');

const orderhistorySchema = new mongoose.Schema({
    // ngo.aggregate([{
    //     $lookup: {
    //             from: "fooddetail",
    //             localField: "email",
    //             foreignField: "email",
    //             as: "fooddetails"
    //     }
    // }])
    
});

module.exports = mongoose.model('orderhistory', orderhistorySchema);