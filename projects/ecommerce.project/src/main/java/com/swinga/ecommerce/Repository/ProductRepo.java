package com.swinga.ecommerce.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.swinga.ecommerce.Model.Product;

@Repository
public interface ProductRepo extends JpaRepository<Product , Integer> {
    
}
