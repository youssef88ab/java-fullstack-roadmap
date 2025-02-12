package com.example.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@CrossOrigin
@RequestMapping("/login")
    public class LoginController {
    
        @GetMapping
        public String login() {
            return "redirect:/login.html";  // Serve static page from `static/`
        }
    }
    