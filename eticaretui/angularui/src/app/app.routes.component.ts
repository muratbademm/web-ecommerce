import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetails } from './components/product-details/product-details';

export const routes: Routes = [
   { path: 'product/:id', component:ProductDetails},
   { path: 'search/:keyword', component:ProductListComponent},
   { path: 'category/:id', component:ProductListComponent},
   { path: 'category', component:ProductListComponent},
   { path: 'product', component:ProductListComponent},
   { path: '',redirectTo:'/product', pathMatch:'full'},
   { path: '**',redirectTo:'/product', pathMatch:'full'}
];
//Router yapısı yani yollar