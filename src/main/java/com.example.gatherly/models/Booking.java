package com.example.gatherly.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import java.time.LocalDate;

@Entity
public class Booking {

   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long id;

   @NotBlank(message = "Name is required")
   private String name;

   @Email(message = "Email should be valid")
   @NotBlank(message = "Email is required")
   private String email;

   @NotBlank(message = "Phone number is required")
   private String phone;

   @NotBlank(message = "Event type is required")
   private String eventType;

   @NotNull(message = "Event date is required")
   private LocalDate date;

   @Column(length = 1000)
   private String details;

   // Getters and Setters
   public Long getId() {
       return id;
   }

   public void setId(Long id) {
       this.id = id;
   }

   public String getName() {
       return name;
   }

   public void setName(String name) {
       this.name = name;
   }

   public String getEmail() {
       return email;
   }

   public void setEmail(String email) {
       this.email = email;
   }

   public String getPhone() {
       return phone;
   }

   public void setPhone(String phone) {
       this.phone = phone;
   }

   public String getEventType() {
       return eventType;
   }

   public void setEventType(String eventType) {
       this.eventType = eventType;
   }

   public LocalDate getDate() {
       return date;
   }

   public void setDate(LocalDate date) {
       this.date = date;
   }

   public String getDetails() {
       return details;
   }

   public void setDetails(String details) {
       this.details = details;
   }
}
