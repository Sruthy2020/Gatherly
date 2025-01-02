package com.example.gatherly.controller;

import com.example.gatherly.model.Contact;
import com.example.gatherly.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contacts")
@CrossOrigin(origins = "http://localhost:3000")
public class ContactController {

   @Autowired
   private ContactRepository contactRepository;

   @PostMapping
   public ResponseEntity<String> submitContactForm(@RequestBody Contact contact) {
       System.out.println("Received Contact: " + contact);

       int rowsAffected = contactRepository.save(contact); // Save using custom repository

       if (rowsAffected > 0) {
           System.out.println("Contact saved successfully!");
           return new ResponseEntity<>("Contact saved successfully!", HttpStatus.CREATED);
       } else {
           System.err.println("Failed to save contact.");
           return new ResponseEntity<>("Failed to save contact.", HttpStatus.INTERNAL_SERVER_ERROR);
       }
   }
}
