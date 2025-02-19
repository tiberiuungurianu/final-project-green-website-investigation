package com.greenwebsite.backend.controllers;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootTest(classes = BackendApplication.class)

@SpringBootApplication
public class BackendApplication {
    public static void main(String[] args) 
    {
        SpringApplication.run(BackendApplication.class, args);
    }
}

@RestController
@RequestMapping("/api")
class TestController {
    @GetMapping("/hello")
    public String sayHello() {
        return "Backend is ON!";
    }
}
