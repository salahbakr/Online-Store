import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/Interface/iproduct';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products!: Array<IProduct>;
  BuySell: number = 1;

  constructor (private route: ActivatedRoute ,private productsService: ProductsService) { }

  ngOnInit(): void {

    if(this.route.snapshot.url.toString()) {
      this.BuySell = 2;
    }

    this.productsService.getAllProducts(this.BuySell).subscribe(
      data=>{
              console.log(data);
              this.products = data;
            }, error => {
              console.log(error);
            }
    );
  }

}
