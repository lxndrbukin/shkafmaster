const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
  name: String,
  phone: String,
  item: String,
  comment: String
});

mongoose.model('orders', orderSchema);