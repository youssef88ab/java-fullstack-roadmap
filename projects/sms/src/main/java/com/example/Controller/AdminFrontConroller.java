package com.example.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@CrossOrigin
@RequestMapping("/admin/students")  // Base path for all methods in this controller
public class AdminFrontConroller {

    @GetMapping("/")
    public String showStudentsPage() {
        return "forward:/index.html";  // Redirect to static HTML file
    }
}