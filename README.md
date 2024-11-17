# Amazon Product Search Web Application
## Overview
This is a web application that allows users to search for products on Amazon.in and displays the results in a structured, sortable tabular format. The application demonstrates capabilities in web scraping, API development, frontend design, and data handling.

## Features
Search Products: Search for products on Amazon.in using a responsive and debounced input field.
Sortable Table: View search results in a sortable table with columns for:
Product Name
Price
Rating
ASIN (Amazon Standard Identification Number)
View Product Details: Navigate to a detailed product page for more information.
Delete Functionality: Remove products from the list if needed.
Clean UI: A user-friendly interface built using React with responsive design principles.
## Tech Stack
### Backend
Node.js: RESTful API service to handle search queries and perform web scraping.
Libraries/Tools Used:
Express Js
Mongoose
express (for API routing)
### Frontend
React: For building a clean, responsive interface.
Bootstrap CSS: For styling the components.
React Table: For rendering sortable tables and UI elements.
### Additional Tools
Axios: For API communication between frontend and backend.
Debouncing: Implemented to optimize search functionality.
## Installation and Setup
### Prerequisites
Ensure the following are installed on your system:

1.Node.js (v14 or higher)
2.npm (v6 or higher)
3.A browser for testing the application
## Steps to Run the Application

1.Clone the Repository:

git clone <repository-url>
cd <repository-directory>
2.Install Backend Dependencies:

cd backend
npm install
3.Start the Backend Server:

node start
By default, the server runs on http://localhost:5000.

4.Install Frontend Dependencies:

cd frontend
npm install
5.Start the Frontend Application:

npm run dev
