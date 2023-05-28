import mongoose from 'mongoose';

const url = process.env.MONGODB_URI;

async function connect() {
  return await mongoose.connect(url as string);
}

async function disconnect() {
  return await mongoose.disconnect();
}

const database = {
  connect,
  disconnect
};

export default database;
