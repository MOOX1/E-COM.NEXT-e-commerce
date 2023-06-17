import Admins from '../Schemas/adminsSchema';
import database from '../database/mongodb';

export const FindAdmin = async (email: string) => {
  await database.connect();
  const admin = await Admins.findOne({ email: email });
  return admin;
};

export const FindAllAdmins = async () => {
  await database.connect();
  const admins = await Admins.find({}).lean();

  return admins;
};

export const updateAdmin = async (id: string, name: string, image: string) => {
  await database.connect();

  console.log(id);
  console.log(name);

  const newAdmin = await Admins.findByIdAndUpdate(
    { _id: id },
    {
      name,
      image
    },
    { new: true }
  );

  newAdmin.save();

  console.log(newAdmin);

  return newAdmin;
};
