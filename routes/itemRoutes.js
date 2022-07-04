const mongoose = require('mongoose');
const Item = mongoose.model('items');
const Offer = mongoose.model('offers');

module.exports = (app) => {
  app.get('/api/items', async (req, res) => {
    await Item.find({}, (err, items) => {
      res.send(items);
    }).clone();
  });

  app.post('/api/items', async (req, res) => {
    const item = await new Item({
      itemNameRU: req.body.itemNameRU,
      itemNameRO: req.body.itemNameRO,
      itemType: req.body.itemType,
      itemDescrRU: req.body.itemDescrRU,
      itemDescrRO: req.body.itemDescrRO,
    });
    item.save();
    res.send(item);
  });
};
