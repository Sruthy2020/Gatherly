package com.example.gatherly.controller;

import com.example.gatherly.model.Booking;
import com.example.gatherly.repository.BookingRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
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
