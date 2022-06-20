const mongoose = require('mongoose');
const { Schema } = mongoose;

const offerSchema = new Schema({
  nameRU: String,
  nameRO: String,
  discount: String,
  textRU: String,
  textRO: String
});

mongoose.model('offers', offerSchema);