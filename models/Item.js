const mongoose = require('mongoose');
const { Schema } = mongoose;

const itemSchema = new Schema({
  itemNameRU: String,
  itemNameRO: String,
  itemTypeRU: String,
  itemTypeRO: String,
  itemDescrRU: String,
  itemDescrRO: String
});

mongoose.model('items', itemSchema);