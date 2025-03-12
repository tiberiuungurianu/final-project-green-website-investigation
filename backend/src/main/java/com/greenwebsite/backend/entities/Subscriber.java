package com.greenwebsite.backend.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Subscriber {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String firstName;
    private String lastName;
    private String email;
    private boolean consent;

    // Constructorul implicit
    public Subscriber() {}

    // Constructor cu parametri
    public Subscriber(String firstName, String lastName, String email, boolean consent) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.consent = consent;
    }

    // Getteri și setteri
    public Long getId() {
        return id;
    }
    
    public String getFirstName() {
        return firstName;
    }
    
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    
    public String getLastName() {
        return lastName;
    }
    
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    
    public String getEmail() {
        return email;
    }
    
    public void setEmail(String email) {
        this.email = email;
    }
    
    public boolean isConsent() {
        return consent;
    }
    
    public void setConsent(boolean consent) {
        this.consent = consent;
    }
}
