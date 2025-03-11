package com.ecommerce.config;

import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.ecommerce.model.User;
import com.ecommerce.repository.UserRepo;



@Service
public class CustomUserDetailsService implements UserDetailsService  {

    @Autowired
    private UserRepo userRepo ; 
    
    @Override 
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepo.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("User not exists by Username or Email"));
        
        Set<GrantedAuthority> authorities = user.getRoles().stream()
            .map((role) -> new SimpleGrantedAuthority(role.getName()))
            .collect(Collectors.toSet());

                
        return new org.springframework.security.core.userdetails.User(
            username,
            user.getPassword(),
            authorities
        );
    }
}
