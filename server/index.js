const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const session = require('express-session');
const Redis = require('ioredis');
const RedisStore = require('connect-redis')(session);
let RedisClient = new Redis({
  host: 'cache',
  port: 6379
});

let mongoDB = `mongodb://${process.env.ME_CONFIG_MONGODB_ADMINUSERNAME}:${process.env.ME_CONFIG_MONGODB_ADMINPASSWORD}@${process.env.ME_CONFIG_MONGODB_HOST}:27017`;
let app = express();

const PORT = 8080;

mongoose.connect(mongoDB, { useUnifiedTopology: true });
let db = mongoose.connection;

db.on('connected', () => console.log("DB connected!"));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const UserRouter = require('./routes/UserRouter');
const DocumentRouter = require('./routes/DocumentRouter');
const badgeRouter = require('./routes/badgeRouter');
const gameBoardRouter = require('./routes/GameBoardRouter');
const courseRouter = require('./routes/courseRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
  credentials: true
}));

app.use(session({
  store: new RedisStore({ client: RedisClient }),
  secret: 'partycat',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    httpOnly: true
  }
}));

app.use('/user', UserRouter);
app.use('/document', DocumentRouter);
app.use('/badge', badgeRouter)
app.use('/gameboard', gameBoardRouter);
app.use('/course', courseRouter);

// Test endpoint
app.get('/', (req, res) => {
  res.send("Test endpoint");
});


app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

module.exports = app;