package com.muratbadem.eticaret.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Entity //Bir sınıfın bir veritabanı tablosunu temsil ettiğini  belirttiği için kullanıyoruz. JPA tarafından sağlanır.
@Table(name = "product_category")
@Getter
@Setter
public class ProductCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;
    @Column(name="category_name")
    private String categoryName;

    @OneToMany (cascade = CascadeType.ALL,mappedBy = "category") // Bu bire çok ilişkisi olduğunu gösterir bu kategorinin
    // bir cok ürünü olabilir.Cascade ise bu kategoriye yapılan işlem ne ise ürünlerine de uygula sil güncelle gibi işlemler için ve
    //mapped by ise Product sınıfında category adlı bir field ile eşlemeyi hangi kategori nesnesine ait olduğunu belirtir.
    private Set<Product> products;
}
