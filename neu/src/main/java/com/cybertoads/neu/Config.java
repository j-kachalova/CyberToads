package com.cybertoads.neu;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import org.springframework.web.filter.HiddenHttpMethodFilter;

import java.util.List;

@Configuration
public class Config {
    public static final String FRONTEND_ORIGIN = "http://localhost:3000";
    public static final String SECURITY_HEADER_STRING = "Authorization";

    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.setAllowedOrigins(List.of(FRONTEND_ORIGIN));
        config.setAllowedHeaders(List.of("Origin", "Content-Type", "Accept", SECURITY_HEADER_STRING));
        config.setExposedHeaders(List.of("Access-Control-Allow-Origin", SECURITY_HEADER_STRING));
        config.setAllowedMethods(List.of("GET", "POST", "PUT", "OPTIONS", "DELETE", "PATCH"));
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }
}
