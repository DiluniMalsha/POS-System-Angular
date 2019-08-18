import {Component, OnInit} from '@angular/core';
import {Customer} from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: Customer[] = [];

  constructor() {
  }

  ngOnInit() {
  }


  addCustomer(id: string, name: string, address: string, email: string, tel: string): void {
    let customer = new Customer(id, name, address, email, tel);
    this.customers.push(customer);
  }

  removeCustomer(customer: Customer): void {
    if (confirm('Are you sure ?')) {
      this.customers.splice(this.customers.indexOf(customer), 1);
    }
  }
}
