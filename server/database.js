const mongoose = require('mongoose');

const { MongoMemoryServer } = require('mongodb-memory-server');
let mongod = null;

const connectDB = async () => {
  try {
    let DB_URI = `mongodb://${process.env.ME_CONFIG_MONGODB_ADMINUSERNAME}:${process.env.ME_CONFIG_MONGODB_ADMINPASSWORD}@${process.env.ME_CONFIG_MONGODB_HOST}:27017`;
    if (process.env.NODE_ENV === 'test') {
        console.log("mocking db");
        mongod = await MongoMemoryServer.create();
        DB_URI = mongod.getUri();
    }

    const conn = await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
      //useFindAndModify: false,
    });

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

const disconnectDB = async () => {
  try {
    await mongoose.connection.close();
    if (mongod) {
      await mongod.stop();
    }
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = { connectDB, disconnectDB };