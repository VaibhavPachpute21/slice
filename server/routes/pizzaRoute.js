const { Router } = require('express');
const express = require('express')
const router = express.Router();
const pizzaModel = require('../models/pizzaModel')

// GET ALL PIZZA || @GET REQUEST
router.get('/getAllPizzas', async (req, res) => {
    try {
        const pizzas = await pizzaModel.find({});
        res.send(pizzas);
    } catch (error) {
        res.json({ message: error });
    }
})

router.post('/addNewPizza', async (req, res) => {
    const { name, category, description, image, prices } = req.body;
    console.log(req.body)
    const newPizza = new pizzaModel({
        name,
        varients: ["small", "medium", "large"],
        prices,
        category,
        image,
        description
    })
    try {
        await newPizza.save()
        res.send(newPizza);
    } catch (error) {
        res.send(error)
    }

})

router.put('/updatePizza', async (req, res) => {
    const { pid, pizza } = req.body;
    const { name, category, description, image, prices } = pizza;
    try {
        pizzaModel.findById({ _id: pid }, function (err, pizzaM) {
            if (!pizzaM) {
                res.send(404).send("data not found")
            }
            else {
                pizzaM.name = name,
                pizzaM.prices = prices,
                pizzaM.category = category,
                pizzaM.description = description,
                pizzaM.image = image

                pizzaM.save().then(pizzaM=>{
                    res.json("updated successfully")
                }).catch(err=>{
                    res.send(err)
                })
            }
        })
    } catch (error) {

    }
})


module.exports = router;