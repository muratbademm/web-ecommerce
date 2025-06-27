import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import{ProductService} from './services/product.service';
import { ProductCategoryMenu } from './components/product-category-menu/product-category-menu';
import { Search } from './components/search/search';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
@Component({
  selector: 'app-root',
  standalone:true,  
  imports: [RouterOutlet,ProductListComponent,HttpClientModule,RouterModule,ProductCategoryMenu,Search,NgbModule,CartStatusComponent],
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css'],
  providers:[ProductService]
})
export class AppComponent {
  protected title = 'angularui';
}
