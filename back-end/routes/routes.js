const express = require('express');
const router = express.Router()

const Runs = require('../models/model-runs');
const Prices = require('../models/model-prices');
const Scrolls = require('../models/model-scrolls');

module.exports = router;

//Add a run record
router.post('/postRun', async (req, res) => {
    const data = new Runs({
        realm: req.body.realm,
        sneakerType: req.body.sneakerType,
        sneakerRarity: req.body.sneakerRarity,
        sneakerLevel: req.body.sneakerLevel,
        gstEarned: req.body.gstEarned,
        energySpent: req.body.energySpent,
        durability: req.body.durability,
        eff: req.body.eff,
        res: req.body.res,
        luck: req.body.luck,
        misteryBox: req.body.misteryBox,
        misteryBoxLevel: req.body.misteryBoxLevel
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get all run records
router.get('/getAllRuns', async (req, res) => {
    try{
        const data = await Runs.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method for run record
router.get('/getOneRun/:id', async (req, res) => {
    try{
        const data = await Runs.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method for Run record
router.patch('/updateRun/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Runs.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method for Run record
router.delete('/deleteRun/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Runs.findByIdAndDelete(id)
        res.send(`Document with ${data.id} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get all price records
router.get('/getLastPrice', async (req, res) => {
    try{
        const data = await Prices.find().limit(1).sort({$natural:-1});
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Delete by ID Method for Price record
router.delete('/deletePrice/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Prices.findByIdAndDelete(id)
        res.send(`Document with ${data.id} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Add a scroll record
router.post('/postScroll', async (req, res) => {
    const data = new Scrolls({
        OpenedMisteryBoxLevel: req.body.OpenedMisteryBoxLevel,
        ScrollDropped: req.body.ScrollDropped,
        ScrollRarity: req.body.ScrollRarity
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get all scroll records
router.get('/getAllScrolls', async (req, res) => {
    try{
        const data = await Scrolls.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method for scroll record
router.get('/getOneScroll/:id', async (req, res) => {
    try{
        const data = await Scrolls.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method for Run record
router.patch('/updateScroll/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Scrolls.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method for scroll record
router.delete('/deleteScroll/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Scrolls.findByIdAndDelete(id)
        res.send(`Document with ${data.id} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

