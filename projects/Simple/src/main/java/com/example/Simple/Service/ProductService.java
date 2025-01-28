package com.example.Simple.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Simple.Model.Product;
import com.example.Simple.Repository.ProductRepo;

@Service
public class ProductService {

    @Autowired
    ProductRepo productRepo;
    
    public List<Product> getProducts() {
        return productRepo.findAll();
    }

    public Product getProductById(int id) {
        return  productRepo.findById(id).orElse(null);
    }

    public void addProduct(Product product) {
        productRepo.save(product);
    }

    public void updateProduct(Product product) {
        
    }

    public void deleteProduct(Product product) {
        productRepo.deleteById(product.getProductID());
    }
}