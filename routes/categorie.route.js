const express = require('express');
// Créer une instance de categorie.
const Categorie = require('../models/categorie');

const router = express.Router();
// afficher la liste des categories.
router.get('/', async (req, res)=> {

    try {
        const cat = await Categorie.find()
        res.status(200).json(cat);
        } 
    catch (error) {
        res.status(404).json({ message: error.message });
        }
});


router.post('/',async (req,res) => {

    const newCategorie = new Categorie(req.body)
    try {
        await newCategorie.save();
        res.status(200).json(newCategorie );
        } 
    catch (error) {
        res.status(404).json({ message: error.message });
        }

});


router.get('/:categorieId',async(req, res)=>{
    try {
    const cat = await Categorie.findById(req.params.categorieId);
    res.status(200).json(cat);
        } 
    catch (error) {
        res.status(404).json({ message: error.message });
        }
});

// Supprimer une catégorie
router.delete('/:categorieId', async (req, res)=> {
    try {
        const id = req.params.categorieId;
        await Categorie.findByIdAndDelete(id);
        res.status(200).json({ message: "categorie deleted successfully." });
        }
    catch (error) {
        res.status(404).json({ message: error.message });
        }
    });

// Modifier une catégorie
router.put('/:categorieId', async (req, res)=> {
    try {
        const cat1 = await Categorie.findByIdAndUpdate(
        req.params.categorieId,
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