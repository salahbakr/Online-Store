import { Component, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IProduct } from 'src/app/Interface/iproduct';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  addProductForm!: FormGroup;
  @ViewChild('staticTabs') staticTabs?: TabsetComponent;
  productView: IProduct = {
    Id: null,
    BuySell: null,
    Name: "",
    Type: "",
    Price: null
  }

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    // this.addProductForm = new FormGroup({
    //   name: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    //   type: new FormControl(null, [Validators.required]),
    //   price: new FormControl(null, [Validators.required])
    // });
    this.createAddProductForm();
  }

  createAddProductForm() {
    this.addProductForm = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(5)]],
      type: [null, [Validators.required]],
      price: [null, [Validators.required]],
      desc: [null, [Validators.required, Validators.minLength(50), Validators.maxLength(500)]],
      spec: [null, [Validators.required, Validators.minLength(50), Validators.maxLength(500)]]
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

  get desc() {
    return this.addProductForm.get('desc') as FormControl;
  }

  get spec() {
    return this.addProductForm.get('spec') as FormControl;
  }

  onBack() {
    this.router.navigate(['/']);
  }

  onSubmit() {
    
  }

  selectTab(tabId: number) {
    if (this.staticTabs?.tabs[tabId]) {
      this.staticTabs.tabs[tabId].active = true;
    }
  }

}
