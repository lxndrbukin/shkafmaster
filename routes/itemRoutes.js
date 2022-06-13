const mongoose = require('mongoose');
const Item = mongoose.model('items');

module.exports = (app) => {
  app.get('/api/items', async (req, res) => {
    await Item.find({}, (err, items) => {
      res.send(items);
    }).clone();
  });

  app.post('/api/items', async (req, res) => {
    const item = new Item({
      itemNameRU: req.body.itemNameRU,
      itemNameRO: req.body.itemNameRO,
      itemTypeRU: req.body.itemTypeRU,
      itemTypeRO: req.body.itemTypeRO,
      itemDescrRU: req.body.itemDescrRU,
      itemDescrRU: req.body.itemDescrRO,
    });
    item.save();
    req.send(item);
  });
};
