import { Component, OnInit } from '@angular/core';
import { Product } from '../../common/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../common/car-item';

@Component({
  standalone:true,
  selector: 'app-product-details',
  imports: [CommonModule,RouterModule],
  templateUrl: './product-details.html',
  styleUrls: ['./product-details.css']
}) 
export class ProductDetails implements OnInit{

  product: Product = new Product();

  constructor (private productService:ProductService, private route: ActivatedRoute, private cartService:CartService){}
    ngOnInit():void{
      console.log("ngonınıt calışıyor");
      this.route.paramMap.subscribe(()=> {
        this.handleProductDetails(); 
      })
    }
  
  handleProductDetails(){
   const theProductId:number= +this.route.snapshot.paramMap.get('id')!;
   this.productService.getProduct(theProductId).subscribe(
    data=> {
      this.product=data;
    }
   )
  }
  addToCart(){
    const theCartItem= new CartItem(this.product);
    this.cartService.addToCart(theCartItem);
  }
}

