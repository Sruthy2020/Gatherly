
# Gatherly
![Gatherly Logo](src%2Fmain%2Fresources%2Fstatic%2Fimages%2Fgatherly1.png)
Gatherly is an event management website designed to showcase front-end design skills. With a vibrant red and black theme, this project offers a visually appealing interface for users to explore event photos, learn about the platform, and book events. The website is powered by Spring Boot for the backend and HTML, CSS, and JavaScript for the frontend.

**Features**
* Home Page: A visually engaging landing page featuring the Gatherly logo.
* About Section: Provides an overview of the platform and its purpose.
* Event Gallery: Showcases photos of previous events categorized into various themes (e.g., Weddings, Parties, Corporate, Private Gatherings).
* Book an Event: Allows users to schedule events using a user-friendly form.
* Contact Section: Enables users to reach out for inquiries.

**Red & Black Theme: A consistent and bold design throughout the website.**

**Technologies Used**
* **Backend** -:
* Spring Boot (Java): Handles the server-side logic, data management, and API endpoints.
* **Frontend** -:
* HTML: Markup for structuring the website.
* CSS: Styling for a consistent and appealing red-black theme.
* JavaScript: Adds interactivity and dynamic functionality.

**Requirements**
To run Gatherly locally, ensure you have the following installed:
* Java (Version 8 or later)
* Maven (for managing dependencies)
* MySQL (for the database)
* Browser (for viewing the website)

**Installation & Running**
1. Clone the Repository
* git clone https://github.com/yourusername/gatherly.git
* cd gatherly
2. Setup the Backend
* Ensure MySQL is running and create a database:
* * CREATE DATABASE gatherly;
  * Update the database credentials in src/main/resources/application.properties:
spring.datasource.url=jdbc:mysql://localhost:3306/gatherly  
spring.datasource.username=yourusername
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update
3. Build and run the Spring Boot application:
* mvn spring-boot:run

The backend will run on http://localhost:8080.

3. Setup the Frontend
* Open the project directory.
* Navigate to src/main/resources/static where the frontend files are located.

Features Demonstration

**Event Gallery**

The event gallery showcases:
* Weddings: Beautiful wedding events with floral decor and custom setups.
* Parties: Vibrant celebrations with creative themes.
* Corporate: Professional events executed seamlessly.
* Private Gatherings: Intimate and personalized events.

**Book an Event**

The booking form includes fields for:
* Name
* Email
* Phone Number
* Event Type
* Event Date (validated to ensure future dates)

**Additional Details**

* Contact Section
* Simple form to reach out to the Gatherly team.

**Future Improvements**
* Add user authentication for event booking.
* Implement admin functionality to manage event listings.
* Integrate payment gateway for bookings.

**Credits**
* Developed by **Sruthy** to experiment and showcase front-end design skills