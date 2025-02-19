package com.greenwebsite.backend.controllers; 

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import java.util.Arrays;

@RestController
@RequestMapping("/api") // Prefix pentru toate rutele din acest controller
public class DataController {

    @GetMapping("/data") // Accesibil la http://localhost:8080/api/data
    public List<String> getData() {
        return Arrays.asList("Element 1", "Element 2", "Element 3");
    }
}
