const express = require('express');
const ProductModel = require('../models/product.model');
const router = express.Router();
router.use(express.json());


router.get('/product', async (req,res)=>{
    try {
        let products = await ProductModel.find({});
        res.send(products);
    } catch (error) {
        res.status(400).send(error);
    }  
});

router.get('/product/:id', async (req,res)=>{
    try {
        let product = await ProductModel.findById(req.params.id);
        res.send(product);
    } catch (error) {
        res.status(500).send(error);
    }  
});


router.post('/product', async (req,res)=>{
    try {
        if(!req.body){
            res.status(400).send('Bad Request')
        }
        let product = new ProductModel(req.body);
        let productCreatedResult = await ProductModel.create(product);
        res.send(productCreatedResult);
    } catch (error) {
        res.status(500).send(error);
    }  
});


router.put('/product/:id', async (req,res)=>{
    try {
        debugger;
        if((!req.body) || (!req.params.id)){
            res.status(400).send('Bad Request')
        }
        let product = new ProductModel(req.body);
        let response = await ProductModel.updateOne({_id: req.params.id}, req.body);
        res.send(response);
    } catch (error) {
        res.status(500).send(error);
    }  
});

router.delete('/product/:id', async (req,res)=>{
    try {
        if(!req.params.id){
            res.status(400).send('Bad Request');
        }
        let productDeletedResult = await ProductModel.deleteOne({_id: req.params.id});
        res.send(productDeletedResult);
    } catch (error) {
        res.status(500).send(error);
    }  
});

module.exports = router;