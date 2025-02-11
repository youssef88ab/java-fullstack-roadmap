package com.example.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/admin/students")  // Base path for all methods in this controller
public class AdminFrontConroller {

    @GetMapping
    public String showStudentsPage() {
        return "forward:/students.html";  // Redirect to static HTML file
    }

    


}
