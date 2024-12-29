package com.example.gatherly.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
    @GetMapping("/")
    public String home(Model model) {
        return "home.html";
    }

    @GetMapping("/resources")
    public String resource(Model model) {
        return "resource.html";
    }

    @GetMapping("/book-event")
    public String bookEvent(Model model) {
        return "bookEvent.html";
    }

    @GetMapping("/about-section")
    public String aboutEvent(Model model) {
        return "about.html";
    }
}
