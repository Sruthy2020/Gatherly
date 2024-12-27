package com.example.gatherly.controller;

import com.example.gatherly.model.Event;
import com.example.gatherly.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/events")
public class EventController {

    @Autowired
    private EventService eventService;

    @GetMapping
    public String listEvents(Model model) {
        model.addAttribute("events", eventService.getAllEvents());
        return "event-list";
    }

    @GetMapping("/add")
    public String addEventForm(Model model) {
        model.addAttribute("event", new Event());
        return "event-form";
    }

    @PostMapping("/add")
    public String addEvent(Event event) {
        eventService.saveEvent(event);
        return "redirect:/events";
    }
}
