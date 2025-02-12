package com.example.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@CrossOrigin
@RequestMapping("/student")  // Base path for all methods in this controller
public class StudentFrontController {

    @GetMapping("/")
    public String greeting() {
        return ("<h1>Welcome Home<h1>");
    }
}
