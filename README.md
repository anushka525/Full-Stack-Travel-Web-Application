# ✈️ Full-Stack Travel Web Application

## 📌 Project Overview

This is a comprehensive full-stack web application designed for discovering, creating, and reviewing travel listings. Built using the **MVC (Model-View-Controller)** architecture, it ensures a clean separation of concerns, making the application organized, scalable, and maintainable.

Users can browse destinations, manage their travel posts, leave reviews, and interact securely through a robust authentication system. The app features server-side rendering with EJS and is powered by a Node.js + Express.js backend connected to a MongoDB database.

---

## ✨ Key Features

- **Browse & Explore Listings** – Discover detailed travel destinations.
- **Create & Manage Listings** – Authenticated users can add, edit, and delete listings.
- **Interactive Reviews** – Leave and read user-generated travel reviews.
- **User Authentication & Authorization** – Built with Passport.js using the Local Strategy.
- **Session Management** – Sessions handled by `express-session` and stored in MongoDB via `connect-mongo`.
- **Flash Messaging** – Real-time success/error feedback using `connect-flash`.
- **Secure Passwords** – Passwords hashed securely using Passport.js' `User.authenticate()`.
- **RESTful Method Support** – `method-override` enables PUT and DELETE requests via HTML forms.
- **Reusable Views** – Templating is organized with `ejs-mate` layouts and partials.
- **Centralized Error Handling** – 404 and 500 error pages with robust handling logic.

---

## 🗂️ Project Structure (MVC)

This application adheres to the Model-View-Controller (MVC) architectural pattern, which helps in organizing the codebase into distinct, interconnected components:

* **Models:** (`./models` directory)
    * Represent the data structure and business logic.
    * Defined using Mongoose schemas (e.g., `User.js`, and presumably `Listing.js`, `Review.js`).
    * Responsible for interacting directly with the MongoDB database.
* **Views:** (`./views` directory)
    * Represent the user interface.
    * These are EJS templates responsible for rendering HTML based on data provided by the controllers.
    * They define what the user sees.
* **Controllers (Routes):** (`./routes` directory, handled by `app.js` and route files)
    * Handle user input, interact with the Models, and decide which View to render.
    * Your `app.js` sets up the main routes (`listingRouter`, `reviewRouter`, `userRouter`), which then direct requests to specific logic (implicitly, the controller-like functions within          your route files).
    * They act as an intermediary between the Models and Views.

**## 🚀 Technologies Used**
**🔧 Backend**
  * Node.js
  * Express.js
  * MongoDB with Mongoose
  * Passport.js for authentication
  * express-session + connect-mongo
  * method-override
  * dotenv for environment config
  * connect-flash
  * ejs-mate for templating

**🎨 Frontend**
* EJS (Embedded JavaScript Templates)
* HTML5 / CSS3 / JavaScript
* Static assets served from /public

**🗃️ Database**
MongoDB Atlas (or local MongoDB)

**##⚙️ Local Setup & Installation**
**✅ Prerequisites**
Ensure you have:

* Node.js (LTS recommended) – Download Node.js
* npm (comes with Node.js)
* MongoDB Atlas account or local MongoDB

📄 License
This project is licensed under the MIT License. Feel free to use, modify, and distribute it.
