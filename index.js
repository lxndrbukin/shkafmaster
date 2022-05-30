const express = require('express');
const mongoose = require('mongoose');


require('./models/User');
require('./models/Order');

mongoose.connect("mongodb+srv://alexbukin:REa96TSu@shkafmaster.2bfok.mongodb.net/shkafmaster?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).catch((error) => console.log(error));

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./routes/userRoutes')(app);
require('./routes/orderRoutes')(app);

app.use(express.static('client/build'));
  
const path = require('path');
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`SERVER IS RUNNING ON PORT ${PORT}`));