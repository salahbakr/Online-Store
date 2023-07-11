import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Array<any> = [
    {
    "Id": 1,
    "Name": "Joker Pants",
    'Type': "pants",
    "Price": 250
    },
    {
    "Id": 2,
    "Name": "Karla House",
    'Type': "House",
    "Price": 3521
    },
    {
    "Id": 3,
    "Name": "Lamborghini",
    'Type': "Car",
    "Price": 1000000
    },
    {
    "Id": 4,
    "Name": "Ferrari",
    'Type': "Car",
    "Price": 3600000
    },
  ]

}
