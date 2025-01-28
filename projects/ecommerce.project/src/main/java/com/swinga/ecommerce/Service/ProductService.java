package com.swinga.ecommerce.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.swinga.ecommerce.Model.Product;
import com.swinga.ecommerce.Repository.ProductRepo;

@Service
public class ProductService {

    @Autowired
    ProductRepo productRepo ;

    public List<Product> getAllProducts() {
        return productRepo.findAll();
    }    
}
