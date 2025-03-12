package com.greenwebsite.backend.requests;

public class SubscriptionRequest {
    private String first_name;
    private String last_name;
    private String email;
    private boolean consent;

    public SubscriptionRequest() {}

    public SubscriptionRequest(String first_name, String last_name, String email, boolean consent) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.consent = consent;
    }

    // Getteri și setteri
    public String getFirst_name() { return first_name; }
    public void setFirst_name(String first_name) { this.first_name = first_name; }

    public String getLast_name() { return last_name; }
    public void setLast_name(String last_name) { this.last_name = last_name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public boolean isConsent() { return consent; }
    public void setConsent(boolean consent) { this.consent = consent; }

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
