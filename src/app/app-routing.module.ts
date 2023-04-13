import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';

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
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
