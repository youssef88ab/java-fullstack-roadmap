package com.example.Security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public UserDetailsService userDetailsService(PasswordEncoder passwordEncoder) {
        UserDetails user = User.withUsername("user")
        .password(passwordEncoder.encode("pass"))
        .roles("USER")
        .build();

        UserDetails admin = User.withUsername("admin")
        .password(passwordEncoder.encode("pass"))
        .roles("ADMIN")
        .build();

        return new InMemoryUserDetailsManager(user , admin);
    }

    @Bean 
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(auth -> auth
            .requestMatchers("/admin").hasRole("ADMIN")
            .requestMatchers("/user").hasAnyRole("ADMIN" , "USER")
            .requestMatchers("/").permitAll()
            .anyRequest().authenticated()
            )
            .formLogin()
            .and()
            .logout();

            return http.build();
    }

    @Bean 
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
