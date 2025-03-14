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

    @Cacheable("data") // this enables caching for this endpoint
    @GetMapping("/data") // it is accessible at http://localhost:8080/api/data
    public List<String> getData() {
        simulateSlowProcessing(); // simulating a slow backend response to test if the caching works
        return Arrays.asList("Element 1", "Element 2", "Element 3");
    }

    @Cacheable("collections") // same as above, but for a different endpoint
    @GetMapping("/collections") 
    public List<String> getCollections() {
        simulateSlowProcessing(); 
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
