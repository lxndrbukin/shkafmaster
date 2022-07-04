const mongoose = require('mongoose');
const { Schema } = mongoose;

const itemSchema = new Schema({
  itemNameRU: String,
  itemNameRO: String,
  itemType: String,
  itemDescrRU: String,
  itemDescrRO: String,
});

mongoose.model('items', itemSchema);
