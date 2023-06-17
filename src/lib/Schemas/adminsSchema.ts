import { Schema, models, model } from 'mongoose';

const AdminsSchema = new Schema(
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
