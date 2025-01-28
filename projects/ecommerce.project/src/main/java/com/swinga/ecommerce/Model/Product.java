package com.swinga.ecommerce.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Product {

    // Attributes ; 
    @Id
    private int id ; 
    private String name ;
    private String description ; 
    private String brand ; 
    private int price ; 
    private String category ; 
    private boolean avaliability ; 
    private int quantity ; 

    // Getters 
    public int getId() {
        return this.id ; 
    }

    public String getName() {
        return this.name ; 
    }

    public String getDescription() {
        return this.description ;
    }

    public String getBrand() {
        return this.brand;
    }

    public int getPrice() {
        return this.price ;
    }

    public String getCategory() {
        return this.category ;
    }

    public boolean getAvaliability() {
        return this.avaliability ;
    }

    public int getQuantity() {
        return this.quantity;
    }

    // Setters ; 

    public void setId(int id) {
        this.id = id ; 
    }

    public void setName(String name){
        this.name = name ; 
    }

    public void setDescription(String description) {
        this.description = description ; 
    }

    public void setBrand(String brand) {
        this.brand = brand ;
    }

    public void setPrice(int price) {
        this.price = price ; 
    }

    public void setAvaliability(boolean avaliability) {
        this.avaliability = avaliability ; 
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity ; 
    }

}
