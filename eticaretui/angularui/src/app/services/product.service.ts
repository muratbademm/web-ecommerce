import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../common/product';
import { ProductCategory } from '../common/product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private baseUrl= 'http://localhost:8080/api/product';
  private categoryUrl= 'http://localhost:8080/api/product-category';

  constructor(private httpClient:HttpClient) { }

  getProductList(theCategoryId:number):Observable<Product[]>{
    //JSON YAPSINI SPRİNG DATA RESTTEN  ALIP PRODUCT ARRAY İÇİNE DOLDURACAK.

    const searchUrl= `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;
    return this.getProducts(searchUrl);
    
  }
  private getProducts(searchUrl: string): Observable<Product[]> {
    return this.httpClient.get<GetResponse>(searchUrl).pipe(
      map(response => response._embedded.product));
  }

  getProductCategories():Observable<ProductCategory[]>{
    return this.httpClient.get<GetResponseProductCategory>(this.categoryUrl).pipe(
      map(response =>response._embedded.productCategory));
  }
  searchProducts(theKeyword:string):Observable<Product[]>{
   const searchUrl=`${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`;
    return this.getProducts(searchUrl);
  }
  getProduct(theProductId:number):Observable<Product>{
       const productUrl=`${this.baseUrl}/${theProductId}`;
       return this.httpClient.get<Product>(productUrl);
  }
   getProductListPaginate( thePage:number, thePageSize:number ,theCategoryId:number):Observable<GetResponse>{
       const searchUrl=`${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}&page=${thePage}&size=${thePageSize}`;
       return this.httpClient.get<GetResponse>(searchUrl);
  }
  searchProductPaginate( thePage:number, thePageSize:number ,theKeyword:string):Observable<GetResponse>{
       const searchUrl=`${this.baseUrl}/search/findByNameContaining?name=${theKeyword}&page=${thePage}&size=${thePageSize}`;
       return this.httpClient.get<GetResponse>(searchUrl);
  }
}

interface GetResponse{
  _embedded:{
    product:Product[];
  },
  page:{
    size:number,
    totalElements:number,
    totalPages:number,
    number:number 
  }
}
interface GetResponseProductCategory{
  _embedded:{
    productCategory:ProductCategory[];
  }
}