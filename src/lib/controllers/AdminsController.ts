import { z } from 'zod';
import Admins from '../Schemas/adminsSchema';
import database from '../database/mongodb';

database.connect();

export const FindAdmin = async (email: string) => {
  await database.connect();
  const admin = await Admins.findOne({ email: email });
  return admin;
};

export const FindAllAdmins = async () => {
  const admins = await Admins.find({}).lean();

  return admins;
};

export const CreateAdmin = async (res: {
  email: string;
  levelAccess: string;
}) => {
  const bodySchema = z.object({
    email: z.string().email('Email inválido'),
    levelAccess: z.string()
  });

  const { email, levelAccess } = bodySchema.parse(res);

  const verifiedEmail = await Admins.findOne({ email: email });

  if (verifiedEmail)
    return { status: 200, message: 'Esse email já foi cadastrado' };

  const newAdmin = await Admins.create({
    email: email,
    levelAccess: levelAccess,
    image: '',
    name: '--'
  });

  const admin = await newAdmin.save();

  return admin;
};

export const updateAdmin = async (id: string, name: string, image: string) => {
  const newAdmin = await Admins.findByIdAndUpdate(
    { _id: id },
    {
      name,
      image
    },
    { new: true }
  );

  newAdmin.save();

  return newAdmin;
};
