import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  public productId!: number;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.productId = this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (params) => {
        this.productId = +params['id'];
      }
    );
  }

  onSelectNext() {
    this.productId++;
    this.router.navigate(['product-details', this.productId]);
  }

}
