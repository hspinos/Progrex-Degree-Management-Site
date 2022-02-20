const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

let mongoDB = "mongodb://root:degreeworkspp@mongo:27017";
let app = express();

const PORT = 8080;

mongoose.connect(mongoDB, { useUnifiedTopology: true });
let db = mongoose.connection;

db.on('connected', () => console.log("DB connected!"));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const UserRouter = require('./routes/UserRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

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