import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { CartProductsComponent } from './cart-products/cart-products.component';
import { AuthService } from './auth.service';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'cart',component:ShoppingcartComponent,canActivate:[AuthService]},
  {path:'cart-products',component:CartProductsComponent,canActivate:[AuthService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
