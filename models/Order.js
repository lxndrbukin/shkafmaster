const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
  name: String,
  phone: String,
  communications: {
    telegram: Boolean,
    viber: Boolean,
    whatsapp: Boolean,
    phonecall: Boolean
  },
  item: String,
  comment: String
});

mongoose.model('orders', orderSchema);