import { Injectable } from '@angular/core';
import { customersData } from '../../../data/customersData';
import { ICustomer } from '../../models/Models';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  getCustomersLarge(): Promise<ICustomer[]> {
    return new Promise((resolve) => {
      resolve(customersData);
    });
  }
}
