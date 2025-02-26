#!/bin/bash

echo " Pornire backend..."
cd backend
mvn spring-boot:run &  # Rulează backend-ul în background

echo " Aștept 5 secunde pentru a lăsa backend-ul să se initializeze..."
sleep 5  # Așteaptă câteva secunde ca backend-ul să pornească

echo "🌍 Pornire frontend și deschidere browser..."
cd ../frontend
npm run dev -- --open  # Rulează frontend-ul și deschide browserul automat

