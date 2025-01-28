package org.example;

public class Desktop implements Computer
{
    public Desktop()
    {
        System.out.println("Desktop Constructor");
    }

    public String features()
    {
        return "Desktop Configuration: 16GB RAM, 1TB Hard Disk, 4GB Graphics Card";
    }

}

