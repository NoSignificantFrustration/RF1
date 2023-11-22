import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/shared/models/Customer';
import { CustomerService } from 'src/app/shared/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {


    customers: Customer[] = [];
  
    constructor (private customerService: CustomerService){}
  
    ngOnInit(): void {
      this.customerService.getAllCustomers().subscribe(customers=>this.customers=customers);
    }
}
