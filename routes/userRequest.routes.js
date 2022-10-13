const express = require('express');
const UserRequestModel = require('../models/userRequest.model');
const router = express.Router();
router.use(express.json());

router.get('/userRequest', async (req,res)=>{
    try {
        let userRequests = await UserRequestModel.find({});
        res.send(userRequests);
    } catch (error) {
        res.status(400).send(error);
    }  
});

router.get('/userRequest/:id', async (req,res)=>{
    try {
        let userRequest = await UserRequestModel.findById(req.params.id);
        res.send(userRequest);
    } catch (error) {
        res.status(500).send(error);
    }  
});





router.post('/userRequest', async (req,res)=>{
    try {
        if(!req.body){
            res.status(400).send('Bad Request')
        }
        let userRequest = new UserRequestModel(req.body);
        let userRequestedCreatedResult = await UserRequestModel.create(userRequest);
        res.send(userRequestedCreatedResult);
    } catch (error) {
        res.status(500).send(error);
    }  
});


router.put('/userRequest/:id', async (req,res)=>{
    try {
        debugger;
        if((!req.body) || (!req.params.id)){
            res.status(400).send('Bad Request')
        }
        let response = await UserRequestModel.updateOne({_id: req.params.id}, req.body);
        res.send(response);
    } catch (error) {
        res.status(500).send(error);
    }  
});


router.delete('/userRequest/:id', async (req,res)=>{
    try {
        if(!req.params.id){
           return res.status(400).send('Bad Request');
        }
        let userRequestUpdatedResult = await UserRequestModel.deleteOne({_id: req.params.id});
        res.send(userRequestUpdatedResult);
    } catch (error) {
        res.status(500).send(error);
    }  
});

module.exports = router;