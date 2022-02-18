let express = require('express');
let app = express();

const PORT = 8080;

const UserRouter = require('./routes/UserRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/user', UserRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

module.exports = app;