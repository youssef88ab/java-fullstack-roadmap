package com.example.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@RequestMapping("/students")  // Base path for all methods in this controller
public class StudentFrontController {

    @GetMapping
    public String showStudentsPage() {
        return "forward:/students.html";  // Redirect to static HTML file
    }

    @GetMapping("/home")
    public String showHomePage() {
        return "forward:/logins.html";  // Redirect to static HTML file
    }
}
