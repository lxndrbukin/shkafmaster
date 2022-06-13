const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const bodyParser = require("body-parser");
const passport = require('passport');
const keys = require('./services/keys');
const session = require('express-session');

require('./models/User');
require('./models/Order');
require('./models/Item');
require('./services/passport');

mongoose.connect(keys.mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('CONNECTED TO MONGODB')).catch((error) => console.log(error));

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.set('trust proxy', 1);
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/userRoutes')(app);
require('./routes/orderRoutes')(app);
require('./routes/itemRoutes')(app);

app.use(express.static('client/build'));
  
const path = require('path');
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`SERVER IS RUNNING ON PORT ${PORT}`));