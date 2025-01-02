package com.example.gatherly.controllers;

import com.example.gatherly.models.Booking;
import com.example.gatherly.repositories.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin(origins = "http://localhost:3000")
public class BookingController {

    @Autowired
    private BookingRepository bookingRepository;

    @PostMapping
    public ResponseEntity<Booking> createBooking(@Valid @RequestBody Booking booking) {
        System.out.println("Received Booking: " + booking); // Log incoming data
        Booking savedBooking = bookingRepository.save(booking); // Save to DB
        System.out.println("Saved Booking: " + savedBooking); // Log saved data
        return new ResponseEntity<>(savedBooking, HttpStatus.CREATED);
    }
}
