const mongoose = require('mongoose');
const Offer = mongoose.model('offers');

module.exports = app => {
  app.get('/api/offers', async (req, res) => {
    await Offer.find({}, (err, offers) => {
      res.send(offers);
    }).clone();
  });

  app.post('/api/offers', async (req, res) => {
    const offer = await new Offer({
      nameRU: req.body.nameRU,
      nameRO: req.body.nameRO,
      discount: req.body.discount,
      textRU: req.body.textRU,
      textRO: req.body.textRO
    });
    offer.save();
    res.send(offer);
  });
}