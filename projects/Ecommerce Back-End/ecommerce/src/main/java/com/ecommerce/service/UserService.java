package com.ecommerce.service;

import java.util.*;

import com.ecommerce.model.Role;
import com.ecommerce.repository.RoleRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.ecommerce.EcommerceApplication;
import com.ecommerce.Dto.UserDTO;
import com.ecommerce.config.CustomUserDetailsService;
import com.ecommerce.config.JwtAuthenticationEntryPoint;
import com.ecommerce.controller.AuthController;
import com.ecommerce.model.User;

import com.ecommerce.repository.UserRepo;

@Service
public class UserService {

    private final JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;

    private final EcommerceApplication ecommerceApplication;

    private final CustomUserDetailsService customUserDetailsService;

    private final AuthService authService;

    private final AuthController authController;

    UserService(AuthController authController, AuthService authService, CustomUserDetailsService customUserDetailsService, EcommerceApplication ecommerceApplication, JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint) {
        this.authController = authController;
        this.authService = authService;
        this.customUserDetailsService = customUserDetailsService;
        this.ecommerceApplication = ecommerceApplication;
        this.jwtAuthenticationEntryPoint = jwtAuthenticationEntryPoint;
    } 

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private RoleRepo roleRepo;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;



    public List<User> getAllUsers() {
        List<User> usersRepo = userRepo.findAll();

        return usersRepo;
    }

    public UserDTO getUser(Long id) {
        User user = userRepo.findById(id).orElseThrow(() -> new RuntimeException("User Not Found"));

        UserDTO userDTO = new UserDTO(user.getId(), user.getUsername(), user.getEmail(),
                user.getRoles().iterator().next().getName());

        return userDTO;
    }

    public void addUser(User user) {

        // Set Id To Null
        user.setId(null);

        // Find Role
        Role role = roleRepo.findById(user.getRoles().iterator().next().getId()).orElseThrow(() -> new RuntimeException("Role Dosent Exist"));

        System.out.println("ROLE NAME : "  + role.getName());
        // Encrypt Password
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));

        // Assign Role
        user.setRoles(Collections.singleton(role)); // Assign a single role

        userRepo.save(user);
    }

    public void updateUser(Long id, User updatedUser) {
        // Find The User
        User user = userRepo.findById(id).orElseThrow(() -> new RuntimeException("User Not Found"));

        // Mise A jour les Champs

        String email = updatedUser.getEmail();
        if (userRepo.findByEmail(email).isPresent()) {
            throw new RuntimeException("This Email is Already Taken email : " + email);
        } else {
            user.setEmail(email);
        }

        String username = updatedUser.getUsername();
        if (userRepo.findByUsername(username).isPresent()) {
            throw new RuntimeException("This Username is Already Take Username : " + username);
        } else {
            user.setUsername(username);
        }

        // Save The User In Database ;
        userRepo.save(user);

    }

    public void deleteUser(Long id) {
        User user = userRepo.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
        // Clear the roles first (to remove from join table)
        user.getRoles().clear();
        userRepo.save(user);

        // Now delete the user
        userRepo.deleteById(id);
    }
}