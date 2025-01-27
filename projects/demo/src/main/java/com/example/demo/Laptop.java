package com.example.demo;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Component
@Primary
public class Laptop implements Computer {

    public String features()
    {
        return "Laptop Configuration: 8GB RAM, 512GB Hard Disk, 2GB Graphics Card";
    }
}