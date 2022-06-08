const mongoose = require('mongoose');
const Order = mongoose.model('orders');

module.exports = app => {

  app.get('/api/orders', async (req, res) => {
		await Order.find({}, (err, orders) => {
			console.log(orders);
			res.send(orders);
		}).clone();
	});

	app.post('/api/orders', async (req, res) => {
		const order = await new Order({
			name: req.body.name,
			phone: req.body.phone,
			item: req.body.item,
			comment: req.body.comment
		});
		const { name, phone, item, comment } = order;
		if (!name || !phone || !item || !comment) {
			res.redirect('/');
			console.log('empty order');
			return;
		}
		order.save();
		res.send(order);
	});
}