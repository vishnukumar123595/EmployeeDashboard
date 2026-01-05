Employee Management Dashboard
--- Project Overview

It allows authenticated users to manage employee records efficiently through a modern, responsive, and user-friendly interface.

The application supports:
>> Secure (mock) authentication, Full CRUD operations for employees, Image upload with preview confirmation, Search and advanced filtering, Persistent data storage using browser Local Storage

The project focuses on clean architecture, reusable components, and professional UI/UX practices.

--- Tech Stack

Frontend: React.js (JavaScript)

Build Tool: Vite

State Management: React Context API

Routing: React Router DOM

Styling: CSS (custom, responsive, modern UI)

Data Persistence: Browser Local Storage (mock API)

Other Concepts Used:

React Hooks, React Portals (for modals), Form validation, Responsive design, Conditional rendering

--- Authentication

A mock login system is implemented.

Users must log in to access the dashboard.

Unauthorized access to the dashboard is restricted using protected routes.

Authentication state is stored in Local Storage for persistence across page reloads.

Note: Username and password validation are mock-based and meant for demonstration only.

--- Dashboard Features
Dashboard Summary

Displays total number of employees

Displays count of Active vs Inactive employees (bonus feature)

Employee List

A tabular view displaying:

Employee ID, Profile Image, Full Name, Gender, Date of Birth, State, Active / Inactive status toggle

Actions: Edit, Delete (with confirmation modal), Print

--- Employee Management
Add / Edit Employee

A reusable form supporting both creation and editing:

Full Name, Gender, Date of Birth, State (dropdown selection), Profile Image upload, Active / Inactive status, Image Upload with Preview

When an image is selected, a modal popup opens showing the image preview. User can confirm (OK) or cancel the image upload. Image is saved only after confirmation.
Images are stored as Base64 strings for Local Storage compatibility.

--- Search & Filters

Search employees by name

Filter by: Gender, Active / Inactive status

Filters work together (combined filtering), Optimized filtering logic for better performance

--- Print Functionality
Allows printing the employee list, Non-essential UI elements (buttons, actions) are hidden during print, Clean print layout for readability


--- UI / UX Highlights
Clean and modern dashboard layout

Professional color palette

Color-coded actions: Active → Green, Edit → Blue, Delete → Red

Fully responsive design (mobile, tablet, desktop), Modal-based confirmations to prevent accidental actions, Graceful handling of empty states


Data Handling (API)
Uses Local Storage as a mock persistence layer, Simulates real-world CRUD operations without a backend, Data persists across browser refreshes, This approach was chosen to keep the project self-contained and easy to run for reviewers.

--- Start the development server:
npm run dev

--- Assumptions & Design Decisions: 

1) Authentication is mock-based as per assignment requirements.

2) Local Storage is used instead of a backend API to simplify setup and evaluation.

3) Image uploads are stored as Base64 strings for persistence.

4) Modals are implemented using React Portals for better UX and layout consistency.

5) Horizontal scrolling is used for tables on mobile devices to preserve readability.
