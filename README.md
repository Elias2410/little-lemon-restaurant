# Little Lemon Restaurant Website

This repository contains the source code for the Little Lemon Restaurant website, a platform for customers to explore the menu, make reservations, and learn about the restaurant.

## Table of Contents

*   [About](#about)
*   [Features](#features)
*   [Technologies Used](#technologies-used)
*   [Getting Started](#getting-started)
    *   [Prerequisites](#prerequisites)
    *   [Installation](#installation)
    *   [Running the Application](#running-the-application)
*   [Project Structure](#project-structure)
*   [Testing](#testing)
*   [Contributing](#contributing)
*   [License](#license)
*   [Contact](#contact)

## About

The Little Lemon Restaurant website is designed to provide a user-friendly online experience for customers. It allows users to browse the menu, see specials, read testimonials, and book tables for dining. The site is built with a focus on responsiveness and accessibility, ensuring a great user experience across various devices.

## Features

*   **Homepage:**
    *   Hero section with restaurant name, location, and brief description.
    *   Highlights section showcasing weekly specials with online ordering links.
    *   Testimonials section for customer reviews.
    *   About section with restaurant history and information.
*   **Navigation:**
    *   Responsive navigation bar with links to different sections.
    *   Hamburger menu for smaller screens to provide better user experience.
*   **Booking Form:**
    *   Interactive form to book a table with date, time, and guest selection.
    *   Form validations to enhance user interaction
    *   Special requests section for special needs.
    *   Customer details form for user information.
    *   Confirmation section to acknowledge the reservation and update the user.
*   **Accessibility:**
    *   The site is built with semantic HTML and ARIA attributes to be accessible.
    *   The app is fully responsive and functional across different devices and screen sizes

## Technologies Used

*   **React:** Front-end library for building user interfaces.
*   **React Router:** Library for navigation between different pages.
*   **CSS:** Styling language using custom CSS for website design.
*   **Jest:** JavaScript testing framework for unit testing.
*   **Testing Library:** Tools for writing unit tests for React components.
*   **Font Awesome:** Icon toolkit for adding icons for a better experience

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

*   [Node.js](https://nodejs.org/): Make sure you have Node.js installed.

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/Elias2410/little-lemon-restaurant.git
    ```
2.  Navigate into the project directory:
    ```bash
    cd little-lemon-restaurant
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```

### Running the Application

To start the development server, run:

```bash
npm start

The application will be available at http://localhost:3000

Project Structure:
little-lemon-project/
├── node_modules/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── logo.png
│   │   ├── header.jpg
│   │   └── ...
│   ├── components/
│   │   ├── About.js
│   │   ├── BookingConfirmationPage.js
│   │   ├── BookingForm.js
│   │   ├── BookingPage.js
│   │   ├── DishCard.js
│   │   ├── Footer.js
│   │   ├── HeroSection.js
│   │   ├── Highlights.js
│   │   ├── HomePage.js
│   │   ├── NavigationBar.js
│   │   ├── Testimonials.js
│   │   └── UserFeedbackCard.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   ├── ... (other files)
│   └── ... (test files)
├── package.json
├── package-lock.json
├── README.md
└── .gitignore

src/assets/: Contains static assets like images and icons.

src/components/: Contains all React components used in the app.

src/: Contains the main App.js, entry point index.js, global styles.css and other necessary project files.

public/: Contains the main HTML file (index.html) that React renders into.

Testing:
The project includes unit tests for all the components. To run the tests, use the command:

These tests help maintain the quality of the code and ensure components are working as intended.

Contributing
If you would like to contribute to the project, please follow these steps:

Fork the repository.

Create a new branch for your feature or bug fix.

Make your changes.

Write tests for your changes.

Submit a pull request.

License
This project is licensed under the MIT License.

Contact
For any questions or concerns, please contact:

Your Name: Elias Yahya Mahmoud
Your Email: eliasyahya100@gmail.com