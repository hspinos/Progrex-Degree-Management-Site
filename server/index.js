const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const session = require('express-session');
const redis = require('redis');
const redisStore = require('connect-redis')(session);
let client = redis.createClient({
  url: `${process.env.REDIS_URL}:6379`
});

let mongoDB = `mongodb://${process.env.ME_CONFIG_MONGODB_ADMINUSERNAME}:${process.env.ME_CONFIG_MONGODB_ADMINPASSWORD}@${process.env.ME_CONFIG_MONGO_HOST}:27017`;
let app = express();

const PORT = 8080;

client.connect();
mongoose.connect(mongoDB, { useUnifiedTopology: true });
let db = mongoose.connection;

db.on('connected', () => console.log("DB connected!"));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const UserRouter = require('./routes/UserRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(session({
  store: new redisStore({ host: process.env.REDIS_URL, port: 6379, client: client }),
  secret: 'partycat',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    httpOnly: false,
    maxAge: 1000 * 60 * 10
  }
}));

app.use('/user', UserRouter);

// Test endpoint
app.use('/', (req, res) => {
  res.send("This is the home page");
  console.log("The home page was accessed");
});


app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

module.exports = app;