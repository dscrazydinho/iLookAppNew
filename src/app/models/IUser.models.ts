import { IEnd } from './IEnd.models';
import { IImage } from './IImage.models';

export interface IUser {
  idUsers?: any;
  username?: string;
  password?: string;
  nameUsers?: string;
  nascUsers?: string;
  rgUsers?: string;
  cpfUsers?: string;
  imgUsers?: IImage;
  phoneUsers?: string;
  celphoneUsers?: string;
  endsUsers?: IEnd[];
}

export interface ILogin {
  username?: string;
  password?: string;
}
