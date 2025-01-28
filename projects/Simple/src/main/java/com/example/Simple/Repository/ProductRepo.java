package com.example.Simple.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.Simple.Model.*;

public interface ProductRepo extends JpaRepository<Product , Integer>  {

    

}