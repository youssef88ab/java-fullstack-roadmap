package com.example.Conrtoller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;

@RestController
public class mainController {
    
    @GetMapping("/")
    public String greet(HttpServletRequest request) {
        return "SESSION ID : " + request.getSession().getId() ;
    }
}
