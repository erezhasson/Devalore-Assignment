const dotenv = require('dotenv')
const http = require('http')
const Pet = require('../models/Pets.model')
 
var min = 100000000;
var max = 900000000;

exports.getPets = function(req, res) {
  console.log('getting all pets');
  Pet.find()
    .exec(function(err, pets) {
      if(err) {
        res.send('error occured')
      } else {
       res.set({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    		});
        res.json(pets);
      }
    });
};

exports.addPet = function(req, res){
  console.log('adding new pet');
	var today = new Date();
	var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

 	var newPet = new Pet();

 	console.log(req.body);
 	newPet.id =  Math.floor(Math.random() * min) + max;
 	newPet.created_at = date;
	newPet.Image = req.body.Image;
	newPet.Name = req.body.Name;
	newPet.Age = req.body.Age;
	newPet.Type = req.body.Type;
	newPet.Color = req.body.Color;

	newPet.save(function(err, pet) {
	if(err) {
	  res.send({
	  	data: {
	  		errors: err
	  	}
	  });
	} else {
	  console.log({ data: { ...pet, errors: {}}});
   	res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
		});
	  res.send({ data: { ...pet, errors: null}});
	}});
}