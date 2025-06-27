package com.muratbadem.eticaret.repository;

import com.muratbadem.eticaret.entity.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource(collectionResourceRel="productCategory",path="product-category") //@RepositoryRestResource bu interface’ten otomatik REST servisi üretir ve
// Spring Data REST sayesinde bu repository'yi otomatik bir REST API olarak dışarı açar.Ekstra restcontroller'a gerek kalmadı.
// collectionResourceRel JSON çıktısında görünecek isim ,
// path tarayıcıda görülecek URL uzantısı
@CrossOrigin("http://localhost:4200")
public interface ProductCategoryRepository extends JpaRepository<ProductCategory ,Long> {
    //JPA Repository otomatik olarak veritabanı ile CRUD işlemleri yapmamızı sağlar.
}