const express = require('express');
// Créer une instance de categorie.
const Scategorie = require('../models/scategorie');

const router = express.Router();
// afficher la liste des categories.
router.get('/', async (req, res)=> {

    try {
        const cat = await Scategorie.find()
        res.status(200).json(cat);
        } 
    catch (error) {
        res.status(404).json({ message: error.message });
        }
});


router.post('/',async (req,res) => {

    const newScategorie = new Scategorie(req.body)
    try {
        await newScategorie.save();
        res.status(200).json(newScategorie );
        } 
    catch (error) {
        res.status(404).json({ message: error.message });
        }

});


router.get('/:scategorieId',async(req, res)=>{
    try {
    const cat = await Scategorie.findById(req.params.scategorieId);
    res.status(200).json(cat);
        } 
    catch (error) {
        res.status(404).json({ message: error.message });
        }
});

// Supprimer une catégorie
router.delete('/:scategorieId', async (req, res)=> {
    try {
        const id = req.params.scategorieId;
        await Scategorie.findByIdAndDelete(id);
        res.status(200).json({ message: "scategorie deleted successfully." });
        }
    catch (error) {
        res.status(404).json({ message: error.message });
        }
    });


router.put('/:scategorieId', async (req, res)=> {
    try {
        const cat1 = await Scategorie.findByIdAndUpdate(
        req.params.scategorieId,
        { $set: req.body },
        { new: true }
        );
        res.status(200).json(cat1);
        } 
    catch (error) {
        res.status(404).json({ message: error.message });
        }
    });    


module.exports = router;