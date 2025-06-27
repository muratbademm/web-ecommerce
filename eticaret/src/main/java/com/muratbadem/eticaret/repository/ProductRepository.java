package com.muratbadem.eticaret.repository;

import com.muratbadem.eticaret.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource(collectionResourceRel="product",path="product")
@CrossOrigin("http://localhost:4200")//Angular uygulaması (http://localhost:4200) bu
// Spring Boot backend'ine (http://localhost:8080) HTTP istekleri gönderebilsin diye izin veriyor.
public interface ProductRepository extends JpaRepository<Product,Long>
// Bu  interface ProductRepository veritabanında ki product tablosuyla ilgili işlemler yapacak ve id alanının veri tipi Longtur diyoruz.
// Spring Data JPA ise veritabanı işlemlerini kolaylaştıran bir yapıdır.
//CRUD FİLTRELEME SIRALAMA SAYFALAMA  CUSTOM SORGULARI  KOLAY BİR ŞEKİLDE YAPARIZ BURADA SAYFALAMAYI YAPIYORUZ.
{
    Page<Product> findByCategoryId(@Param("id") Long id, Pageable pageable);
    //sayfalama verilerin parça parça alınmasını sağlıyor.
    // CategorId si 10 olan urunleri getirir ama 50 ürün var ise bunu sayfa sayfa bölerek getirir.
    // Bu fonksiyon Product türünde veri döndüreceğimizi söyler.
    Page<Product> findByNameContaining(@Param("name") String name, Pageable pageable);
    // isme göre arama yapmamız sağlıyor
    // Product tablosunda  name alanı içerisinde  belirlir bir kelimeye göre arama yapıp bütününü getirir
    // Örnek Ultra Hd Samsung Televizyon kelimesine Ultra ile ulaşılabilir.
    //Metodun parametresi namedir.Pageable sayfalı getirmeyi sağlar. 100 ürünü 10 ar 10ar şekilde listeler.

}
