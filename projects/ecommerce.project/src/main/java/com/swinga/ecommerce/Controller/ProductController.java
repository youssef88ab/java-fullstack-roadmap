package com.swinga.ecommerce.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.swinga.ecommerce.Model.Product;
import com.swinga.ecommerce.Service.ProductService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class ProductController {

    @Autowired
    ProductService productService ; 

    @GetMapping("/welcome")
    public String greet() {
        return "Hello, World!";
    }

    @GetMapping("/products")
    public List<Product> getAllProducts() {
        return productService.getAllProducts() ;
    }
}
