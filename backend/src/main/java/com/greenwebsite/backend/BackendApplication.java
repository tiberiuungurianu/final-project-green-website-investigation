package com.greenwebsite.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@EnableCaching // This enables caching for caching strategies to reduce data transfer between the server and the user’s device.  

public class BackendApplication {
    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }
}

// im still keeping the test endpoint
@RestController
@RequestMapping("/api")
class TestController {
    @GetMapping("/hello")
    public String sayHello() {
        return "Backend is ON!";
    }
}
