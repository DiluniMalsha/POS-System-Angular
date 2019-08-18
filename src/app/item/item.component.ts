import { Component, OnInit } from '@angular/core';
import {Customer} from '../customer/customer';
import {Item} from './item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  items: Item[] = [];
  constructor() { }

  ngOnInit() {
  }


  addItem(code: string, name: string, price: string, qty: number): void {
    const item = new Item(code, name, price, qty);
    this.items.push(item);
  }

  removeItem(item: Item): void {
    if (confirm('Are you sure ?')) {
      this.items.splice(this.items.indexOf(item), 1);
    }
  }
}
