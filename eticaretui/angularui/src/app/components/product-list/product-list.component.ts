import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../common/product';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartItem } from '../../common/car-item';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  standalone:true,
  imports: [RouterModule,CommonModule,NgbModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  product:Product[]=[];
  currentCategoryId:number=10;
  searchMode: boolean =false;

  previousCategoryId: number=1;
  thePageNumber:number=1;
  thePageSize:number=5; // bu satırile bir sayfa içinde kaç veri gösterilmesini istdeğimizi yazdık.
  theTotalElements:number=0;

  previousKeyword:string="";


  constructor(private productService: ProductService,private route:ActivatedRoute,private cartService:CartService ){
  
  }

  ngOnInit():void {
    this.route.paramMap.subscribe(()=>{
      this.listProducts();
    })
    
  }
  listProducts(){
     this.searchMode=this.route.snapshot.paramMap.has('keyword');
     if(this.searchMode){
        this.handleSearchProducts();
     }else{
      this.handListProducts();
     }
    }
    handleSearchProducts(){
       const theKeyword:string =this.route.snapshot.paramMap.get('keyword')!;

       if(this.previousKeyword!=theKeyword){
        this.thePageNumber=1;
       }
       this.previousKeyword=theKeyword;

       this.productService.searchProductPaginate(this.thePageNumber -1 , this.thePageSize, theKeyword).subscribe(
        
         this.processResult()
        
       );
    }
   
    handListProducts(){
      const hasCategoryId:boolean = this.route.snapshot.paramMap.has('id');
    if(hasCategoryId){
      this.currentCategoryId= + this.route.snapshot.paramMap.get('id')!;
    }
    else{
       this.currentCategoryId=10;
    }
    if(this.previousCategoryId!=this.currentCategoryId){
      this.thePageNumber=1;
    }

    this.previousCategoryId=this.currentCategoryId;

    this.productService.getProductListPaginate( this.thePageNumber -1,this.thePageSize,this.currentCategoryId)
    .subscribe(
     
         this.processResult()
      // bura ile birlikte paggination yapmış olduk
    )
    }
  
    updatePageSize(pageSize:string){
      this.thePageSize=+pageSize;
      this.thePageNumber=1;
      this.listProducts();
    }
     processResult(){
      return(data:any)=>{
              this.product=data._embedded.product;
        this.thePageNumber=data.page.number+1;
        this.thePageSize=data.page.size;
        this.theTotalElements=data.page.totalElements;
      };
    }
    addToCart(theProduct:Product){
      //Burada  call CartService yazıyorum.
      const theCartItem=new CartItem(theProduct);
      this.cartService.addToCart(theCartItem);
    }
}
