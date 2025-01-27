package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
public class Dev 
{
    @Autowired
    @Qualifier("desktop")
    private Computer computer;

    public void info()
    {
        System.out.println("--- Developer Information ---");
        System.out.println("Name : Anonyme \nEmail : example@gmail.com") ;
        System.out.println(computer.features());
    }   
}