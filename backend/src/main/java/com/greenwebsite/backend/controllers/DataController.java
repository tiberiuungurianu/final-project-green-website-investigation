package com.greenwebsite.backend.controllers; 

import org.springframework.cache.annotation.Cacheable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import java.util.Arrays;

@RestController
@RequestMapping("/api") // Prefix for all routes in this controller
public class DataController {

    @Cacheable("data") // Enables caching for this endpoint
    @GetMapping("/data") // Accessible at http://localhost:8080/api/data
    public List<String> getData() {
        simulateSlowProcessing(); // Simulates a slow backend response
        return Arrays.asList("Element 1", "Element 2", "Element 3");
    }

    @Cacheable("collections") // Enables caching for collections API
    @GetMapping("/collections") // Accessible at http://localhost:8080/api/collections
    public List<String> getCollections() {
        simulateSlowProcessing(); // Simulates a slow database query
        return Arrays.asList("Rare Books", "Manuscripts", "Periodicals", "Digital Archives");
    }

    private void simulateSlowProcessing() {
        try {
            Thread.sleep(3000); // Simulating a slow database query
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
