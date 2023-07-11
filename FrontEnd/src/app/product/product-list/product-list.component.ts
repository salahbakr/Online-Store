import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Interface/iproduct';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products!: Array<IProduct>;

  constructor (private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe(
      data=>{
              console.log(data);
              this.products = data;
            }, error => {
              console.log(error);
            }
    );
  }

}
