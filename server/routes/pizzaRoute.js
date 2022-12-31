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

router.post('/addNewPizza',async (req, res) => {
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



module.exports = router;