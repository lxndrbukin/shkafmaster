const mongoose = require('mongoose');
const Order = mongoose.model('orders');

module.exports = app => {
  app.get('/api/orders', async (req, res) => {
		await Order.find({}, (err, order) => {
			res.send(order);
		})
	});

	app.post('/api/orders', async (req, res) => {
		const order = await new Order({
			name: req.body.name,
			phone: req.body.phone,
			item: req.body.item,
			comment: req.body.comment
		});
		console.log(order);
		order.save();
		res.send(order);
	});
}