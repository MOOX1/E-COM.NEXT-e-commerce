import Admins from '../Schemas/adminsSchema';
import database from '../database/mongodb';

export const FindAdmin = async (email: string) => {
  await database.connect();
  const admin = await Admins.findOne({ email: email });

  console.log(admin, 'aqui');

  return admin;
};
