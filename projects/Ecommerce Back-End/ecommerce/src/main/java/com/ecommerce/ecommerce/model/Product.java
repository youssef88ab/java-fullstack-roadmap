package com.ecommerce.ecommerce.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Product {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-increment
    private Long id ;
    private String name ; 
    private String category; 
    private double price; 

    // Default Constructor ; 
    public Product() {

    }

    // Parametreized Constrcutor ;
    public Product(String name , String category , double price ) {
        this.name = name ; 
        this.category = category ; 
        this.price = price; 
    }

    // Getters ; 
    public String getName() {
        return this.name; 
    }

    public String getCategory() {
        return this.category;
    }
    
    public double getPrice() {
        return this.price;
    }


    // Setters ; 
    public void setName(String name) {
        this.name = name ;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public void setPrice(double price) {
        this.price = price ;
    }



}
