package com.ecommerce.ecommerce.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.ecommerce.model.Product;
import com.ecommerce.ecommerce.service.ProductService;

import java.io.PrintWriter;
import java.io.StringWriter;
import org.springframework.http.HttpHeaders;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@CrossOrigin(origins = "http://127.0.0.1:5500") // Front End URL
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/all")
    public ResponseEntity<List<Product>> getProducts() {
        List<Product> Products = productService.getAllProducts();
        return new ResponseEntity<>(Products , HttpStatus.OK);
    }
    
    @DeleteMapping("delete/{id}")
    public ResponseEntity deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    private static final String UPLOAD_DIR = "src/main/resources/static/images/";  // Folder to store images


    @GetMapping("/{id}")
    public ResponseEntity getProduct(@PathVariable Long id) {
        return new ResponseEntity<>(productService.getProductById(id) , HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity updateProduct(@PathVariable Long id , @RequestBody Product updatedProduct) {
        return new ResponseEntity<>(productService.updateProduct(id, updatedProduct) , HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity addProduct(@RequestBody Product product) {
        return new ResponseEntity<>(productService.addProduct(product),HttpStatus.OK);
    }

    @GetMapping("/export")
    public ResponseEntity<String> exportProductscsv() {
        List<Product> products = productService.getAllProducts();

        StringWriter writer = new StringWriter();
        PrintWriter csvWriter = new PrintWriter(writer);

        // CSV Header
        csvWriter.println("id,name,category,price");

        // CSV Row 
        for (Product product : products) {
            csvWriter.println(product.getId() + "," +
                              product.getName()+ "," +
                              product.getCategory()+ "," +
                              product.getPrice()+ ",");
        } 

        csvWriter.flush();
        csvWriter.close();

        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=products.csv");
        return new ResponseEntity<>(writer.toString(), headers, HttpStatus.OK);
    }
}
