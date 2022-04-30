const express = require('express');
const cors = require('cors');
const path = require('path');
const { connectDB, disconnectDB } = require('./database');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const { DateTime } = require("luxon");
let app = express();

let PORT = 8081;


if(process.env.NODE_ENV !== 'test') {
    PORT = 8080;
    connectDB();
    const session = require('express-session');
    const Redis = require('ioredis');
    const RedisStore = require('connect-redis')(session);
    let RedisClient = new Redis({
        host: `${process.env.REDIS_HOST}`,
        password: `${process.env.REDIS_PASSWORD}`,
        port: 6379
    });

    app.use(session({
        store: new RedisStore({ client: RedisClient }),
        secret: 'partycat',
        resave: false,
        saveUninitialized: false,
        cookie: {
          secure: false,
          httpOnly: true,
          maxAge: 1000 * 60 * 60 * 24 // This will result in a hour
        }
      }));
}

app.use(cookieParser());


const UserRouter = require('./routes/UserRouter');
const DocumentRouter = require('./routes/DocumentRouter');
const badgeRouter = require('./routes/badgeRouter');
const courseRouter = require('./routes/courseRouter');

app.use(express.static(path.join(__dirname, 'frontend/build')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
  credentials: true
}));


app.use('/user', UserRouter);
app.use('/document', DocumentRouter);
app.use('/badge', badgeRouter);
app.use('/course', courseRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

module.exports = app;