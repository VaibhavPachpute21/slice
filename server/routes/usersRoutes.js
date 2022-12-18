const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel')

router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    const newUser = new userModel({ name, email, password });
    try {
        await newUser.save();
        res.status(200).json({
            success: true,
            message: "Registered!!!"
        })
    } catch (error) {
        res.status(400).json({
            message: error
        });
    }
});



// ROUTE TO GET ALL PIZZAS
router.get('/', (req, res) => {
    pizzas.find({}, function (err, posts) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(posts);
        }
    });
});


// router.delete('/del/:id',async (req,res)=>{
//     console.log(req.params.id);
//     res.send(req.params.id);
//     const result= await pizzas.deleteOne({_id:req.params.id })
// })



module.exports = router;