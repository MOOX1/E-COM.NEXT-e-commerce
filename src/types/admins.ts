export interface IAdminInDataBase {
  _id: string;
  email: string;
  levelAccess: string;
  image: string;
  name: string;
}

type TResponseCode = 200 | 201 | 401 | 404 | 500;

export interface IResponseDefault {
  status: TResponseCode;
  message: string;
}
