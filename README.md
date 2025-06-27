# 🛍️ Full Stack E-Commerce Application

Bu proje, Angular frontend ve Spring Boot backend mimarisi ile geliştirilmiş tam fonksiyonlu bir e-ticaret uygulamasıdır. MySQL veritabanı kullanılarak ürün ve kategori yönetimi yapılmaktadır.

## 🚀 Kullanılan Teknolojiler

### Frontend (Angular)
- Angular 20
- TypeScript
- RxJS
- Bootstrap / NG Bootstrap
- Component-Driven Architecture

### Backend (Spring Boot)
- Spring Boot 3
- Spring Web (REST API)
- Spring Data JPA
- Hibernate ORM
- Lombok
- ModelMapper (kullanılmamış ama önerilir)
- Java 17+

### Database
- MySQL 8.0
- Tablolar: `product`, `product_category`
- İlişkisel yapı (FK: category_id)

---

## 🧠 Yazılım Mimarisinde Kullanılan Yapılar

| Desen/Prensip               | Açıklama |
|----------------------------|----------|
| MVC Architecture           | Spring controller – Angular component yapısı |
| Dependency Injection (DI)  | `@Service`, `@Autowired`, Angular servis enjeksiyonu |
| Repository Pattern         | `JpaRepository` kullanımı |
| Service Layer Pattern      | `ProductService` ve benzeri sınıflar |
| Singleton Pattern          | Spring servisleri ve Angular servisleri |
| Unit of Work (Dolaylı)     | Hibernate transaction yönetimi |
| Observer Pattern           | Angular tarafında RxJS kullanımı |

---

## 🗂️ Proje Yapısı

