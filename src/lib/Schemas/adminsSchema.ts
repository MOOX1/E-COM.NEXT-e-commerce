import { Schema, models, model } from 'mongoose';

interface AdminsSchemaProps {
  email: string;
  levelAccess: string;
  image: string;
  name: string;
}

const AdminsSchema = new Schema<AdminsSchemaProps>(
  {
    email: { type: String, unique: true, required: true, lowercase: true },
    levelAccess: { type: String, required: true },
    image: { type: String },
    name: { type: String }
  },
  { timestamps: true }
);

const Admins = models.admins || model('admins', AdminsSchema);

export default Admins;
