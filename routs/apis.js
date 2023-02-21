const express = require('express')
const router = express.Router();
const Product = require('../models/product')
const Similar = require('../models/similar')

//push products
router.post('/addproduct', async (req, res) => {
    try {
        const product = Product(req.body);
        product.save();
        res.status(200).json({msg:"Product Successfully Added"})
    }

    catch (err) {
        res.status(500).json({ error: "500 err occur" });
    }
})

//get all products
router.get('/fatchallproduct/:page/:category', async (req, res)=>{
    try{
        let pa = req.params.page.replace(":","");
        let page = parseInt(pa);
        let category = req.params.category.replace(":","")

        const products = await Product.find({"category":category}).limit(8*page).then((data)=>{
            var arr = [];
            let i = 0;
            if(page>1){
                i = 8*(page-1);
            }
            for( i; i<data.length; i++){
                arr.push(data[i])
            }
            return arr;
        });

        //these 3 lines giving num of total product
        const totalProducts = await Product.find({"category":category});
        const totalp = totalProducts.length;
        res.status(200).json({products,totalp})
    }
    catch (err){
        res.status(500).json({ error: "500 err occur"+ err });
    }
})

//get one products
router.get('/findone/:id', async(req, res)=>{
    try{
        const product = await Product.findOne({"product_url": req.params.id})
        res.status(200).json(product)
    }
    catch(err){
        res.status(500).json({ error: "500 err occur"+ err });
    }
})



//for similar products

//push products
router.post('/addsimilar', async (req, res) => {
    try {
        const similar = Similar(req.body);
        similar.save();
        res.status(200).json({msg:"Product Successfully Added"})
    }

    catch (err) {
        res.status(500).json({ error: "500 err occur" });
    }
})

//get one products
router.get('/findsimilar/:id', async(req, res)=>{
    try{
        const similar = await Similar.findOne({"similar": req.params.id})
        res.status(200).json(similar)
    }
    catch(err){
        res.status(500).json({ error: "500 err occur"+ err });
    }
})


//get one products
router.get('/fatchalltype/:type', async (req, res)=>{
    try{
        const product = await Product.find({"product_type":req.params.type});
        res.status(200).json(product)
    }
    catch (err){
        res.status(500).json({ error: "500 err occur"+ err });
    }
})

//get one products
router.get('/findtrending/:trend', async (req, res)=>{
    try{
        // console.log(req.params.trend)
        const product = await Product.find({"trending":req.params.trend}).limit(8); //it will find top 8 searched data
        res.status(200).json(product)
    }
    catch (err){
        res.status(500).json({ error: "500 err occur"+ err });
    }
})

module.exports = router