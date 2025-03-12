package com.greenwebsite.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.greenwebsite.backend.entities.Subscriber;

public interface SubscriberRepository extends JpaRepository<Subscriber, Long> {
    // Metode suplimentare, dacă sunt necesare
}
