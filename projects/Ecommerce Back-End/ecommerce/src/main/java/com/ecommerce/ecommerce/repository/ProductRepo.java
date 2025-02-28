package com.ecommerce.ecommerce.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.ecommerce.ecommerce.model.Product;


@Repository
public interface ProductRepo extends JpaRepository<Product, Long> {
    
    @Query("SELECT p FROM Product p WHERE " + "LOWER(p.name)  LIKE LOWER(CONCAT('%', :keyword , '%'))")
    List<Product> searchStudent(@Param("keyword") String keyword) ;
}
