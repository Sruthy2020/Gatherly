package com.example.gatherly.controllers;

import com.example.gatherly.models.Contact;
import com.example.gatherly.repositories.ContactRepository;
import jakarta.validation.Valid;
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
    public ResponseEntity<Contact> submitContactForm(@Valid @RequestBody Contact contact) {
        System.out.println("Received Contact: " + contact); // Log incoming data
        Contact savedContact = contactRepository.save(contact); // Save to DB
        System.out.println("Saved Contact: " + savedContact); // Log saved data
        return new ResponseEntity<>(savedContact, HttpStatus.CREATED);
    }

}