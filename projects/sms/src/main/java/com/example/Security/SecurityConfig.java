package com.example.Security;

import javax.sql.DataSource;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests((requests) -> requests
                .requestMatchers("/", "/login", "/logout").permitAll() // Ensure login/logout are accessible
                .requestMatchers("/student/**").hasRole("STUDENT") // Require STUDENT role for student endpoints
                .requestMatchers("/admin/**").hasRole("ADMIN") // Require ADMIN role for admin endpoints
                .anyRequest().authenticated() // All other endpoints require authentication
            )
            .formLogin((form) -> form
                .successHandler(customSuccessHandler())
                .permitAll()
            )
            .logout((logout) -> logout
                .logoutSuccessUrl("/") // Redirect to home after logout
                .permitAll()
            );

        return http.build();
    }

    @Bean
    public AuthenticationSuccessHandler customSuccessHandler() {
        return (request, response, authentication) -> {
            var authorities = AuthorityUtils.authorityListToSet(authentication.getAuthorities());
            
            if (authorities.contains("ROLE_ADMIN")) {
                response.sendRedirect("/admin/students/"); // Redirect admins
            } else {
                response.sendRedirect("/student/"); // Redirect normal users
            }
        };
    }

    @Bean
    public JdbcUserDetailsManager userDetailsManager(DataSource dataSource) {
        JdbcUserDetailsManager manager = new JdbcUserDetailsManager(dataSource);
        manager.setUsersByUsernameQuery("SELECT username , password , enabled FROM USERS WHERE USERNAME = ?");
        manager.setAuthoritiesByUsernameQuery("SELECT username , authority FROM authorities WHERE username = ?");
        return manager ;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return NoOpPasswordEncoder.getInstance(); // Use BCrypt for password encoding
    }
}