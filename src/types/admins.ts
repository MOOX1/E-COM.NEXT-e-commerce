export interface AdminInDataBase {
  _id: string;
  email: string;
  levelAccess: string;
  image: string;
  name: string;
}

type ResponseCode = 200 | 201 | 401 | 404 | 500;

export interface ResponseDefault {
  status: ResponseCode;
  message: string;
}
