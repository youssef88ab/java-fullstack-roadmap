package com.example.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Student {
    // Attributes ; 
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-increment ID
    private int id ; 
    private String name ; 
    private String email ; 

    // Default Constructor ; 
    public Student() {

    }

    // Parametreized Constructor ; 
    public Student(String name , String email) {
        this.name = name ; 
        this.email = email ;
    }

    // Getters ; 
    public int getId() {
        return this.id ;
    }

    public String getName() {
        return this.name ; 
    }

    public String getEmail() {
        return this.email ;
    }

    // Setters ; 

    public void setName(String name) {
        this.name = name ;
    }

    public void setEmail(String email) {
        this.email = email ;
    }
}
