package com.example.Simple.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.Simple.Model.Product;

@Service
public class ProductService {

    List<Product> products = new ArrayList<> ( Arrays.asList( 
                                            new Product(1, "Iphone", 90000) , 
                                            new Product(2, "Samsung", 80000) , 
                                            new Product(3, "OnePlus", 70000) , 
                                            new Product(4, "Redmi", 60000) , 
                                            new Product(5, "Realme", 50000) , 
                                            new Product(6, "Oppo", 40000) , 
                                            new Product(7, "Vivo", 30000) ,
                                            new Product(8, "Nokia", 20000) , 
                                            new Product(9, "Micromax", 10000) , 
                                            new Product(10, "Lava", 5000)));

    public List<Product> getProducts() {
            return products;
    }

    public Product getProductById(int id) {
        return products.stream().filter(p -> p.getProductID() == id).findFirst().get();
    }

    public void addProduct(Product product) {
        products.add(product);
    }

    public void updateProduct(Product product) {
        for(int i = 0 ; i < products.size() ; i++)
        {
            Product p = products.get(i);
            if(p.getProductID() == product.getProductID())
            {
                products.set(i, product);
                return;
            }
        }
    }

    public void deleteProduct(Product product) {
        products.remove(product);
    }
}