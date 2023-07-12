import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  addProductForm!: FormGroup;

  constructor(private router: Router) { }

  ngOnInit() {
    this.addProductForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      type: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required])
    });
  }

  get name() {
    return this.addProductForm.get('name') as FormControl;
  }

  get type() {
    return this.addProductForm.get('type') as FormControl;
  }

  get price() {
    return this.addProductForm.get('price') as FormControl;
  }

  onBack() {
    this.router.navigate(['/']);
  }

  onSubmit() {
    
  }

}
