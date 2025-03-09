import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ManageProductsComponent } from './pages/manage-products/manage-products.component';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ProductsComponent } from './pages/products/products.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home' , component: HomeComponent } , 
  { path: 'dashboard', component: DashboardComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'manage-products', component: ManageProductsComponent } , 
  { path: 'cart' , component: CartComponent } , 
  { path: 'checkout' , component: CheckoutComponent} , 
  { path: 'products' , component: ProductsComponent} , 
  { path: 'add-product' , component: AddProductComponent} , 
  { path: 'edit-product/:productId' , component: EditProductComponent}
];
