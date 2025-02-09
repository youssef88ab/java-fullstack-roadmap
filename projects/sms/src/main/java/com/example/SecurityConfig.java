package com.example;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests((requests) -> requests
                .requestMatchers("/", "/login", "/logout").permitAll() // Ensure login/logout are accessible
                .requestMatchers("/students").hasRole("STUDENT") // Only students can access /students
                .requestMatchers("/admin").hasRole("ADMIN") // Only admins can access /admin
                .anyRequest().authenticated() // All other endpoints require authentication
            )
            .formLogin((form) -> form
                .loginPage("/login") // Custom login page
                .defaultSuccessUrl("/", true) // Redirect to home after successful login
                .permitAll()
            )
            .logout((logout) -> logout
                .logoutSuccessUrl("/") // Redirect to home after logout
                .permitAll()
            );

        return http.build();
    }

    @Bean
    public UserDetailsService userDetailsService() {
        UserDetails student = User.builder()
            .username("student")
            .password(passwordEncoder().encode("student")) // Encode password
            .roles("STUDENT") // Assign role
            .build();

        UserDetails admin = User.builder()
            .username("admin")
            .password(passwordEncoder().encode("admin")) // Encode password
            .roles("ADMIN") // Assign role
            .build();

        System.out.println("Users created: student and admin");

        return new InMemoryUserDetailsManager(student, admin);
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(); // Use BCrypt for password encoding
    }
}
