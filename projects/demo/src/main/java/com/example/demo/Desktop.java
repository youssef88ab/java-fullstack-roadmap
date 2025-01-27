package com.example.demo;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Component
public class Desktop implements Computer
{
    public String features()
    {
        return "Desktop Configuration: 16GB RAM, 1TB Hard Disk, 4GB Graphics Card";
    }  

}
