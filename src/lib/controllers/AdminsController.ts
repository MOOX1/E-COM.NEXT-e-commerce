import Admins from '../Schemas/adminsSchema';
import database from '../database/mongodb';

export const runtime = `edge`;

export const FindAdmin = async (email: string) => {
  await database.connect();
  const admin = await Admins.findOne({ email: email });
  return admin;
};
