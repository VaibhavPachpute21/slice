const express = require('express');
const router = express.Router();
const pizzas=require('../models/pizzaModel')

router.get('/', (req, res) => {
    pizzas.find({}, function(err, posts){
        if(err){
            console.log(err);
        }
        else {
            res.json(posts);
        }
    });
});


// router.post('/register',async(req,res)=>{
//     console.log(req.body);
//     const pizza=new pizzas(req.body);
//     const addPizza=await pizza.save();
//     if(addPizza){
//         res.status(201).json({ message: 'sucessfully added' });
//     }
// });

// router.delete('/del/:id',async (req,res)=>{
//     console.log(req.params.id);
//     res.send(req.params.id);
//     const result= await pizzas.deleteOne({_id:req.params.id })
// })



module.exports=router;