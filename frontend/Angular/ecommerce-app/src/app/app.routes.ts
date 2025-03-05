import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ManageProductsComponent } from './pages/manage-products/manage-products.component';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ProductsComponent } from './pages/products/products.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home' , component: HomeComponent } , 
  { path: 'dashboard', component: DashboardComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'manage-products', component: ManageProductsComponent } , 
  { path: 'cart' , component: CartComponent } , 
  { path: 'checkout' , component: CheckoutComponent} , 
  { path: 'products' , component: ProductsComponent}
];
