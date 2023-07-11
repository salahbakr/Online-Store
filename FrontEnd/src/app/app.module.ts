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
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', component: ProductListComponent},
  { path: 'add-product', component: AddProductComponent},
  { path: 'sell-product', component: ProductListComponent},
  { path: 'product-details/:id', component: ProductDetailsComponent},
  { path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    ProductListComponent,
    NavBarComponent,
    AddProductComponent,
    ProductDetailsComponent,
    PageNotFoundComponent
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
