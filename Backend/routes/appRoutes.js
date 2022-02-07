const petController = require("../controllers/petController")
const express = require('express')
const router = express.Router();

router.get('/pets', petController.getPets);

router.post('/add-pet', petController.addPet);

module.exports = router;