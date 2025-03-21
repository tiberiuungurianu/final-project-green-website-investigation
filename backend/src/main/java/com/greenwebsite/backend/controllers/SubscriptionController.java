package com.greenwebsite.backend.controllers;

import com.greenwebsite.backend.models.SubscriptionRequest;
import com.greenwebsite.backend.entities.Subscriber;
import com.greenwebsite.backend.repositories.SubscriberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class SubscriptionController {

    @Autowired
    private SubscriberRepository subscriberRepository;

    @PostMapping("/subscribe")
    public ResponseEntity<String> subscribe(@RequestBody SubscriptionRequest request) {
        // this creates a new subscriber object
        Subscriber subscriber = new Subscriber();
        subscriber.setFirstName(request.getFirst_name());
        subscriber.setLastName(request.getLast_name());
        subscriber.setEmail(request.getEmail());
        subscriber.setConsent(request.isConsent());

        // this saves the database data
        subscriberRepository.save(subscriber);

        return ResponseEntity.ok("Subscription saved successfully!");
    }
}
