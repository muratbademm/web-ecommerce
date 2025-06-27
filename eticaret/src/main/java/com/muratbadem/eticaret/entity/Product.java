package com.muratbadem.eticaret.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.math.BigDecimal;
import java.util.Date;

@Entity //Bir sınıfın bir veritabanı tablosunu temsil ettiğini  belirttiği için kullanıyoruz. JPA tarafından sağlanır.
@Table(name ="product")
@Data // Getter Setter üretir otomatik olarak
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;
    @ManyToOne
    @JoinColumn(name="category_id", nullable = false)
    private  ProductCategory category;

    @Column(name="sku")
    private String sku ;
    @Column(name="name")
    private String name;
    @Column(name="description")
    private String description;
    @Column(name="unit_price")
    private BigDecimal unitPrice;
    @Column(name="image_url")
    private String  imageUrl;
    @Column(name="active")
    private  boolean active;
    @Column(name="units_in_stock")
    private  int unitsInStock;
    @Column(name="date_created")
    @CreationTimestamp //Bu anatasyon entitiy nesnesi ilk kez kaydedildiğinde oluşturulma zamanı belirlenir.
    private Date dateCreated;
    @Column(name="last_updated")
    @UpdateTimestamp
    private Date lastUpdated;
}
