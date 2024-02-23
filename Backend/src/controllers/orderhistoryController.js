const mongoose = require('mongoose')

const orderhistoryModel = require('../models/orderhistory');
const fooddetail = mongoose.model('fooddetail');

const orderhistorySaveController = async (req, res) => {
    try {
        const {
            email,
            ngoname,
            fooddetail,
        } = req.body
        
        //save oder details
        const order = await newschema({
            email,
            ngoname,
            fooddetail,
        }).save();

        return res.status(200).send({
            success: true,
            message: 'order added to order history',
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'error in order save api',
            error,
        });
    }
};

const orderhistoryGetController = async (req, res) => {
    try {
        const {
            email,
        } = req.body
        
        const orderhistory = await orderhistoryModel.find({email: email});

        return res.status(200).send({
            success: true,
            message: 'items retrieved from order history',
            orderhistory,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'error in order get api',
            error,
        });
    }
};

const orderhistoryGetAllController = async (req, res) => {
    try {
        
        const orderhistory = await orderhistoryModel.find();

        return res.status(200).send({
            success: true,
            message: 'items retrieved from order history',
            orderhistory,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'error in order get all api',
            error,
        });
    }
};


module.exports = {orderhistorySaveController, orderhistoryGetController, orderhistoryGetAllController};