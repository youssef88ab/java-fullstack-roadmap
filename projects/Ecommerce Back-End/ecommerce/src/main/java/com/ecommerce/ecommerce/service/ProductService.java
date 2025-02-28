package com.ecommerce.ecommerce.service;

import java.util.List;
import java.util.Optional;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.ecommerce.model.Product;

import com.ecommerce.ecommerce.repository.ProductRepo;

@Service
public class ProductService {

    @Autowired
    private ProductRepo productRepo; 

    public List<Product> getAllProducts() {
        return productRepo.findAll();
    }

    public void deleteProduct(Long id) {
        productRepo.deleteById(id);
    }

    public Product getProductById(Long id) {
        return productRepo.findById(id).orElse(null);
    }

    public Product updateProduct(Long id , Product updatedProduct) {
        Optional<Product> productOptional = productRepo.findById(id) ;
        if (productOptional.isPresent()) {
            Product product = productOptional.get();
            product.setName(updatedProduct.getName());
            product.setPrice(updatedProduct.getPrice());
            product.setCategory(updatedProduct.getCategory());
            return productRepo.save(product);
        }
        else {
            return null;
        }
    } 

    public Product addProduct(Product product) {
        return productRepo.save(product);
    }

}
