const mongoose = require('mongoose');
const Item = mongoose.model('items');
const fs = require('fs');
// const multer = require('multer');
const path = require('path');

// const multerStorage = multer.memoryStorage();
// const upload = multer({ storage: multerStorage });

module.exports = (app) => {
  app.get('/api/items', async (req, res) => {
    await Item.find({}, (err, items) => {
      res.send(items);
    }).clone();
  });

  // app.post('/api/items', upload.single('image'), async (req, res) => {
  //   const item = await new Item({
  //     itemNameRU: req.body.itemNameRU,
  //     itemNameRO: req.body.itemNameRO,
  //     itemType: req.body.itemType,
  //     itemImg: {
  //       data: new Buffer.from(req.file.buffer, 'base64'),
  //       contentType: req.file.mimetype,
  //     },
  //     itemDescrRU: req.body.itemDescrRU,
  //     itemDescrRO: req.body.itemDescrRO,
  //   });
  //   item.save();
  //   res.send(item);
  // });
};
