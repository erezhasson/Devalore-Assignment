var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PetSchema = new Schema({
    Image: String,

    id: {
      type: String,
      maxLength: 9
    },

    Name: {
      type: String,
      maxLength: 25
    },

    Age: {
      type: Number,
      min: 0
    },
    
    Type: String,
    Color: String,
    created_at: String
});

module.exports = mongoose.model('Pet', PetSchema, "Pets");