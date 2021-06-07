import { IImage } from './IImage.models';

export interface IProduct {

  idProducts?: any;
  nameProducts?: string;
  typeProducts?: string;
  saldoProducts?: number;
  pCostProducts?: number;
  pSaleProducts?: number;
  preDescProducts?: string;
  descProducts?: string;
  availableProducts?: string;
  highProducts?: string;
  organicProducts?: string;
  imgProducts?: IImage[];

}
