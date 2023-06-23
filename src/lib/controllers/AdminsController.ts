import { z } from 'zod';
import Admins from '../Schemas/adminsSchema';
import database from '../database/mongodb';
import { ObjectId } from 'mongodb';
import { IAdminInDataBase, IResponseDefault } from '@/types/admins';

database.connect();

export const FindAdmin = async (
  email: string
): Promise<IAdminInDataBase | null> => {
  await database.connect();
  const admin = (await Admins.findOne({
    email: email
  }).lean()) as IAdminInDataBase | null;
  return admin;
};

export const FindAllAdmins = async (): Promise<
  IAdminInDataBase[] | null | IResponseDefault
> => {
  const admins = (await Admins.find({}).lean()) as IAdminInDataBase[] | null;

  if (!admins) {
    return {
      status: 404,
      message: 'Usuário não encontrado'
    };
  }

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

export const DeleteAdmin = async (
  id: string
): Promise<IAdminInDataBase | null | IResponseDefault> => {
  const adminDeleted = await Admins.findByIdAndDelete({
    _id: new ObjectId(id)
  });

  if (!adminDeleted) {
    return { status: 404, message: 'Usuário não encontrado' };
  }

  return adminDeleted;
};

export const UpdateAdmin = async (
  id: string,
  name: string,
  image: string
): Promise<IAdminInDataBase | null | IResponseDefault> => {
  const newAdmin = await Admins.findByIdAndUpdate(
    { _id: id },
    {
      name,
      image
    },
    { new: true }
  );

  if (!newAdmin) {
    return {
      status: 404,
      message: 'Usuário não encontrado'
    };
  }

  newAdmin.save();

  return newAdmin;
};
