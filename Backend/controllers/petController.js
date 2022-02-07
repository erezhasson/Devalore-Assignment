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
        console.log(pets);
        res.json(pets);
      }
    });
};

exports.addPet = function(req, res){
  console.log('ading new all pets');

	var today = new Date();
	var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

 	var newPet = new Pet();

 	newPet.id =  Math.floor(Math.random() * min) + max;
 	newPet.created_at = date;
	newPet.Name = req.body.Name;
	newPet.Age = req.body.Age;
	newPet.Type = req.body.Type;
	newPet.Color = req.body.Color;

	newPet.save(function(err, book) {
	if(err) {
	  res.send('error saving book');
	} else {
	  console.log(book);
	  res.send(book);
	}
	});
}