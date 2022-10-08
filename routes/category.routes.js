const express = require('express');
const CategoryModel = require('../models/category.model');
const router = express.Router();
router.use(express.json());

router.get('/category', async (req,res)=>{
    try {
        console.log('got request from client');
        let categories = await CategoryModel.find({});
        res.send(categories);
    } catch (error) {
        res.status(400).send(error);
    }  
});

router.get('/category/:id', async (req,res)=>{
    try {
        let category = await CategoryModel.findById(req.params.id);
        res.send(category);
    } catch (error) {
        res.status(500).send(error);
    }  
});





router.post('/category', async (req,res)=>{
    try {
        console.log('received post request for category');
        if(!req.body){
            res.status(400).send('Bad Request')
        }
        let category = new CategoryModel(req.body);
        let categoryCreatedResult = await CategoryModel.create(category);
        res.send(categoryCreatedResult);
    } catch (error) {
        res.status(500).send(error);
    }  
});


router.put('/category/:id', async (req,res)=>{
    try {
        debugger;
        if((!req.body) || (!req.params.id)){
            res.status(400).send('Bad Request')
        }
        let category = new CategoryModel(req.body);
        let response = await CategoryModel.updateOne({_id: req.params.id}, req.body);
        res.send(response);
    } catch (error) {
        res.status(500).send(error);
    }  
});


router.delete('category/:id', async (req,res)=>{
    try {
        if(!req.params.id){
            res.status(400).send('Bad Request');
        }
        let categoryUpdatedResult = await CategoryModel.deleteOne({_id: req.params.id});
        res.send(categoryUpdatedResult);
    } catch (error) {
        res.status(500).send(error);
    }  
});

module.exports = router;