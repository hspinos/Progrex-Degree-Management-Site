const express = require('express');
const cors = require('cors');
const session = require('express-session');
const redis = require('redis');
const connectRedis = require('connect-redis');
const mongoose = require('mongoose');

let mongoDB = "mongodb://root:degreeworkspp@mongo:27017";
let app = express();

const PORT = 8080;

const RedisStore = connectRedis(session);
const redisClient = redis.createClient({
  host: process.env.REDIS_URL,
  port: 6379
});

redisClient.on('error', () => {
  console.log("Could not connect to redis: " + err);
});

redisClient.on('connect', () => {
  console.log("Connected to redis successfully!");
});

mongoose.connect(mongoDB, { useUnifiedTopology: true });
let db = mongoose.connection;

db.on('connected', () => console.log("DB connected!"));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const UserRouter = require('./routes/UserRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(session({
  store: new RedisStore({ client: redisClient }),
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