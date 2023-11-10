import { Schema, models, model, Model } from 'mongoose';

export interface IAuthor {
  email: string;
  image: string;
}

export type TTypeChange = 'add' | 'remove' | 'edit' | 'create';

export interface ILog {
  typeChange: TTypeChange;
  date: Date;
  author: IAuthor;
  logDescription: string;
}

const authorSchema = new Schema<IAuthor>({
  email: { type: String, required: true },
  image: { type: String, default: null },
});

const logSchema = new Schema<ILog>({
  date: { type: Date, required: true },
  logDescription: { type: String, required: true },
  author: authorSchema,
  typeChange: { type: String, required: true },
});

const Logs: Model<ILog> = models.logs || model('logs', logSchema);

export default Logs;
