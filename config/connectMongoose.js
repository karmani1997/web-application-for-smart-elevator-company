const mongoose = require('mongoose');
const {MongoMemoryReplSet} = require('mongodb-memory-server');

const testMode = process.env.NODE_ENV === 'test';

const getMongooseConfig = () => {
  const config = {
  };

  if (testMode) {
    return {
      ...config,
      keepAlive: true,
      serverSelectionTimeoutMS: 100000,
    };
  } else {
    return config;
  }
};

const getMongoInMemoryServerUri = async () => {
  const replSet = await MongoMemoryReplSet.create({
    replSet: {storageEngine: 'wiredTiger'},
  });

  const mongoUri = await replSet.getUri();

  return mongoUri;
};

const connectMongoose = async () => {
  if (testMode) {
    process.env.MONGO_URL = await getMongoInMemoryServerUri();
  }
  const mongooseConfig = getMongooseConfig();
  return mongoose.connect(process.env.MONGO_URL, mongooseConfig);
};

module.exports = connectMongoose;
