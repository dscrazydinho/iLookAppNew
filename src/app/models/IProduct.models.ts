import { IImage } from './IImage.models';

export interface IProduct {

  idProducts?: any;
  nameProducts?: string;
  typeProducts?: string;
  qtdProducts?: number;
  pCostProducts?: string;
  pSaleProducts?: number;
  preDescProducts?: string;
  descProducts?: string;
  availableProducts?: string;
  highProducts?: string;
  imgProducts?: IImage[];

}
