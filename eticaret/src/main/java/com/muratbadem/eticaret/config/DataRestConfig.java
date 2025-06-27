package com.muratbadem.eticaret.config;

import com.muratbadem.eticaret.entity.Product;
import com.muratbadem.eticaret.entity.ProductCategory;
import jakarta.persistence.EntityManager;
import org.hibernate.type.EntityType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Configuration
public class DataRestConfig implements RepositoryRestConfigurer {

    private EntityManager entityManager;
    @Autowired
    public  DataRestConfig(EntityManager theentityManager){
        entityManager=theentityManager;
    }


    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {

        RepositoryRestConfigurer.super.configureRepositoryRestConfiguration(config, cors);
        HttpMethod[] theUnsupportedActions= {HttpMethod.PUT,HttpMethod.POST,HttpMethod.DELETE};
        config.getExposureConfiguration().
                forDomainType(Product.class).
                withItemExposure(((metdata, httpMethods) ->httpMethods.disable(theUnsupportedActions)))
                .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions));

        config.getExposureConfiguration().
                forDomainType(ProductCategory.class).
                withItemExposure(((metdata, httpMethods) ->httpMethods.disable(theUnsupportedActions)))
                .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions));

       // Bu satır Spring Data Restin
        // varsayılan konfigürasyonunu korur ama sen özel ayarlar ekleyebilirsin demektir.
        exposeIds(config);
    }
    private  void  exposeIds(RepositoryRestConfiguration config){
        Set<jakarta.persistence.metamodel.EntityType<?>> entities = entityManager.getMetamodel().getEntities(); //Spring Boot + Spring Data REST projelerinde kullanılır ve veritabanı varlıklarının
        // (@Entity'lerin) ID’lerini (kimliklerini) API çıktısında görünür hale getirmek için yazılır
        //entityManager → JPA'nın EntityManager'ıdır (veritabanı işlemleri için kullanılır).
        //getMetamodel() → JPA'nın veri modelini verir.
        //getEntities() → Projedeki tüm @Entity sınıflarını listeler (örneğin: Product, ProductCategory gibi).
        List<Class<?>> entityClasses=new ArrayList<>();
        for (jakarta.persistence.metamodel.EntityType<?>entityType:entities){
            entityClasses.add(entityType.getJavaType());
        }
        Class[] domainTypes =entityClasses.toArray(new Class[0]); // listeyi diziye ceviriyoruz
        config.exposeIdsFor(domainTypes); // bu dizinin Spring data rest ayarıdır.
        // Tüm entity sınıflarının id lerinin jsonda görünmesini sağlayan kod parçacığıdır.
    }
}
