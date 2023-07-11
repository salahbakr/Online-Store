import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductCardComponent } from './product/product-card/product-card.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductsService } from './services/products.service';
import { AddProductComponent } from './product/add-product/add-product.component';

const appRoutes: Routes = [
  { path: '', component: ProductListComponent},
  { path: 'add-product', component: AddProductComponent},
  { path: 'sell-product', component: ProductListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    ProductListComponent,
    NavBarComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
