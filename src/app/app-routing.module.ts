import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';
import { SearchComponent } from './search/search.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
 {
  path:'',
  component:HomeComponent
 },
 {
  path:'seller-auth',
  component:SellerAuthComponent,
 },
 {
  path:'seller-home',
  component:SellerHomeComponent,
  canActivate:[AuthenticationGuard]
 },
 {
  component:SellerAddProductComponent,
  path:'seller-add-product',
  canActivate:[AuthenticationGuard]
 },
 {
  component:SellerUpdateProductComponent,
  path:'seller-update-product/:id',
  canActivate:[AuthenticationGuard]
 },
 {
  component:SearchComponent,
  path:'search/:query'
 },{
  component:ProductDetailsComponent,
  path:'details/:productId'
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
