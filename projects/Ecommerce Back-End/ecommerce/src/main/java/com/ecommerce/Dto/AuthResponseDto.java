package com.ecommerce.Dto;

import lombok.Data;

@Data
public class AuthResponseDto {

    private String token;
    private String role; 

    public void setToken(String token) {
        this.token = token;
    }

    public String getToken() {
        return this.token; 
    }

    public void setRole(String role) {
        this.role = role ;
    }

    public String getRole() {
        return this.role;
    }

}