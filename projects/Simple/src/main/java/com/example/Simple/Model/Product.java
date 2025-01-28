package com.example.Simple.Model;

import lombok.Data;

import org.springframework.stereotype.Component;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;

@Component
@Entity
public class Product 
{
    @Id
    private int productID;
    private String productName;
    private double price ; 

    public Product()
    {
        
    }

    public Product(int ProductID , String ProductName , double Price)
    {
        this.productID = ProductID;
        this.productName = ProductName;
        this.price = Price;
    }

    public int getProductID() {
        return productID;
    }

    public void setProductID(int productID) {
        this.productID = productID;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public double getPrice() {
        return price;
    }   

    public void setPrice(double price) {
        this.price = price;
    }

}