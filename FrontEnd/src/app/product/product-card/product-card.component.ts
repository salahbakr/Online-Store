import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  product: any = {
    "Id": 1,
    "Name": "Joker Pants",
    'Type': "pants",
    "Price": 250
  }
}
