import { IEnd } from './IEnd.models';
import { IProduct } from './IProduct.models';
import { IUser } from './IUser.models';

export interface ICart {
  idSales?: any;
  paymentSales?: string;
  valueSales?: number;
  obsSales?: string;
  userSales?: IUser;
  deliveryEnds?: IEnd;
  itensSales?: ICartItens[];
}

export interface ICartItens {
  idSalesItem?: any;
  qtdSalesItem?: number;
  priceSalesItem?: number;
  productSalesItem?: IProduct;
}
