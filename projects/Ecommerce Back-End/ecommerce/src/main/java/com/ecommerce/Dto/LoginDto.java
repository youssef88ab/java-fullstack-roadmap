package com.ecommerce.Dto;

import lombok.Data;

@Data
public class LoginDto {
    
    private String username ; 
    private String password ;
    
    // Getters 
    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }
}
