package com.greenwebsite.backend.models;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public class SubscriptionRequest {

    @NotBlank(message = "First name is required")
    private String first_name;
    
    @NotBlank(message = "Last name is required")
    private String last_name;
    
    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email format")
    private String email;
    
    private boolean consent;

    // Constructorul implicit este necesar pentru deserializare
    public SubscriptionRequest() {}

    // Constructor cu parametri (opțional)
    public SubscriptionRequest(String first_name, String last_name, String email, boolean consent) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.consent = consent;
    }

    // Getteri și setteri
    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
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

    @Override
    public String toString() {
        return "SubscriptionRequest{" +
               "first_name='" + first_name + '\'' +
               ", last_name='" + last_name + '\'' +
               ", email='" + email + '\'' +
               ", consent=" + consent +
               '}';
    }
}
