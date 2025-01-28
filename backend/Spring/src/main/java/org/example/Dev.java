package org.example;

public class Dev
{
    private String first_name ;
    private String last_name  ;
    private int age ;
    private Computer computer;

    // Default Paramaeter ;
    public Dev()
    {
        System.out.println("Dev Constructor !");
    }

    // Parametreized Parameter ;
    public Dev(String first_name , String last_name , int age )
    {
        this.first_name = first_name ;
        this.last_name  = last_name  ;
        this.age = age ;

    }

    // Getters ;

    public int getAge() {
        return age;
    }

    public String getFirst_name() {
        return first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public Computer getComputer() {
        return computer;
    }

    // Setters ;

    public void setAge(int age) {
        this.age = age;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public void setComputer(Computer computer) {
        this.computer = computer;
    }

    // Methodes
    public void show_info()
    {
        System.out.println("--- Developer Information ---");
        System.out.println("First Name : " + getFirst_name());
        System.out.println("Last  Name : " + getLast_name());
        System.out.println("Age : " + getAge());
        System.out.println(computer.features());
    }
}
