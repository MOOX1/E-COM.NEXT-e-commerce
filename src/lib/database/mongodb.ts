import mongoose from 'mongoose';

const url = process.env.MONGODB_URI;

async function connect() {
  if (mongoose?.connection?.readyState >= 1) {
    return mongoose.connection.asPromise();
  }
  return await mongoose.connect(url as string);
}

async function disconnect() {
  return await mongoose.disconnect();
}

const database = {
  connect,
  disconnect,
};

export default database;
