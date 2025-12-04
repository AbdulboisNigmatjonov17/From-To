import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CustomerService } from '../../services/customer/customer.service';
import { ICustomer } from '../../models/Models';

@Component({
  selector: 'app-help-for-translator',
  imports: [TableModule, CommonModule, ButtonModule, HttpClientModule],
  templateUrl: './help-for-translator.html',
  styleUrl: './help-for-translator.css',
  standalone: true,
  providers: [CustomerService]
})
export class HelpForTranslator {
  customers!: ICustomer[];

  first = 0;

  rows = 10;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomersLarge().then((customers) => (this.customers = customers));
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  pageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }

  isLastPage(): boolean {
    return this.customers ? this.first + this.rows >= this.customers.length : true;
  }

  isFirstPage(): boolean {
    return this.customers ? this.first === 0 : true;
  }
}
