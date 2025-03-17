package com.ecommerce.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ecommerce.EcommerceApplication;
import com.ecommerce.Dto.UserDTO;
import com.ecommerce.config.CustomUserDetailsService;
import com.ecommerce.controller.AuthController;
import com.ecommerce.model.User;
import com.ecommerce.repository.UserRepo;

@Service
public class UserService {

    private final EcommerceApplication ecommerceApplication;

    private final CustomUserDetailsService customUserDetailsService;

    private final AuthService authService;

    private final AuthController authController;
    
    @Autowired 
    private UserRepo userRepo ;



    UserService(AuthController authController, AuthService authService, CustomUserDetailsService customUserDetailsService, EcommerceApplication ecommerceApplication) {
        this.authController = authController;
        this.authService = authService;
        this.customUserDetailsService = customUserDetailsService;
        this.ecommerceApplication = ecommerceApplication;
    } 

    public List<UserDTO> getAllUsers() {
        List<User> usersRepo = userRepo.findAll();

        List<UserDTO> users = new ArrayList<>(); 
        for (User user : usersRepo) {
            UserDTO userDTO = new UserDTO(user.getId(), user.getUsername() , user.getEmail() , user.getRoles().iterator().next().getName());
            users.add(userDTO);
        }
        return users;
    }

    public UserDTO getUser(Long id) {
        User user = userRepo.findById(id).orElseThrow( () -> new RuntimeException("User Not Found"));

        UserDTO userDTO = new UserDTO(user.getId() , user.getUsername() , user.getEmail() , user.getRoles().iterator().next().getName());

        return userDTO; 
    }


    public void addUser(User user) {
        userRepo.save(user);
    }

    public void updateUser(Long id , User updatedUser) {
        // Find The User 
        User user = userRepo.findById(id).orElseThrow( () -> new RuntimeException("User Not Found"));        

       // Mise A jour les Champs 

       String email = updatedUser.getEmail(); 
       if (userRepo.findByEmail(email).isPresent()) {
        throw new RuntimeException("This Email is Already Taken email : " + email); 
       }
       else {
        user.setEmail(email); 
       }

       String username = updatedUser.getUsername();
       if (userRepo.findByUsername(username).isPresent()) {
        throw new RuntimeException("This Username is Already Take Username : " + username);
       }
       else {
        user.setUsername(username);
       }
       
       // Save The User In Database ; 
       userRepo.save(user);

    }

    public void deleteUser(Long id) {
        userRepo.deleteById(id);
    }

    
}
