package org.example;

public class Laptop implements Computer
{
    public Laptop()
    {
        System.out.println("Laptop Constructor");
    }

    public String features()
    {
        return "Laptop Configuration: 8GB RAM, 512GB Hard Disk, 2GB Graphics Card";
    }
}
