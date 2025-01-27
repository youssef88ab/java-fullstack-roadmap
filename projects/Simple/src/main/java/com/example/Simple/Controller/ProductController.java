package com.example.Simple.Controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Simple.Service.*;
import com.example.Simple.Model.*;

@RestController
public class ProductController {

    @Autowired
    ProductService productService ;

    @GetMapping("/products")
    public List<Product> getProducts()
    {
        return productService.getProducts();
    }

    @GetMapping("/products/{id}")
    public Product getProductById(@PathVariable int id)
    {
        return productService.getProductById(id);
    }

    @PostMapping("/products")
    public void addProduct(@RequestBody Product product)
    {
        productService.addProduct(product);
        System.out.println(product.getProductName() + " added successfully");
    }

    @PutMapping("/products")
    public void updateProduct(@RequestBody Product product)
    {
        productService.updateProduct(product);
        System.out.println(product.getProductName() + " updated successfully");
    }

    @DeleteMapping("/products/{id}")
    public void deleteProduct(@PathVariable int id)
    {
        Product product = productService.getProductById(id);
        productService.deleteProduct(product);
        System.out.println(product.getProductName() + " deleted successfully");
    }
}
