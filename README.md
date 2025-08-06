# Full-Stack Travel Web Application

## ✈️ Project Overview

This is a comprehensive full-stack web application designed for discovering, creating, and reviewing travel listings. 
Built on the **MVC (Model-View-Controller) architectural pattern**, it ensures a clear separation of concerns, making the codebase organized, scalable, and maintainable. 
Users can browse a variety of destinations, manage their own travel posts, leave insightful reviews, and securely interact with the platform through a robust authentication system. 
The application features server-side rendering using EJS templates and is powered by a Node.js and Express.js backend, seamlessly connected to a MongoDB database.

## ✨ Key Features

* **Browse & Explore Listings:** Discover a wide range of travel destinations with detailed information.
* **Create & Manage Listings:** Authenticated users can securely add new travel listings, complete with descriptions and details.
* **Interactive Reviews:** Users can read reviews from other travelers and contribute their own experiences for each listing.
* **User Authentication & Authorization:** Secure sign-up, login, and logout functionalities are implemented using Passport.js (Local Strategy) to manage user sessions.
* **Session Management:** Persistent user sessions are handled efficiently with `express-session` and stored securely in MongoDB using `connect-mongo`.
* **Flash Messaging System:** Provides real-time, user-friendly feedback for various actions (e.g., successful operations, errors).
* **Secure Password Handling:** User passwords are (presumably) hashed and securely stored, as indicated by Passport.js `User.authenticate()`.
* **Dynamic Data Handling:** Uses `method-override` to support PUT and DELETE requests from HTML forms.
* **Customizable Views:** Leverages `ejs-mate` for reusable layouts and partials, making EJS templating more organized.
* **Centralized Error Handling:** Robust error management responses.

## ⚙️ Project Structure (MVC)

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
    * Your `app.js` sets up the main routes (`listingRouter`, `reviewRouter`, `userRouter`), which then direct requests to specific logic (implicitly, the controller-like functions within your route files).
    * They act as an intermediary between the Models and Views.

## 🚀 Technologies Used

### Backend
* **Node.js:** The JavaScript runtime environment.
* **Express.js:** The web framework for Node.js, used for building APIs and handling routes.
* **Mongoose:** An ODM (Object Data Modeling) library for MongoDB and Node.js.
* **Passport.js:** Middleware for user authentication (specifically, `passport-local` for username/password strategy).
* **`express-session`:** Middleware to handle user sessions.
* **`connect-mongo`:** MongoDB session store for `express-session`.
* **`connect-flash`:** Provides flash messages, a way to store messages in a session and display them to the user.
* **`ejs-mate`:** Extends EJS with block and layout functionality.
* **`dotenv`:** Zero-dependency module that loads environment variables from a `.env` file.
* **`method-override`:** Allows you to use PUT and DELETE HTTP methods in places where the client doesn't support it.

### Frontend
* **EJS (Embedded JavaScript):** The primary templating engine used for rendering dynamic HTML content on the server side.
* **HTML5, CSS3, JavaScript:** Core web technologies for structure, styling, and interactivity.
* **Static Assets:** Serves static files (CSS, client-side JS, images) from the `/public` directory.

### Database
* **MongoDB:** A NoSQL, document-oriented database used for storing all application data (listings, reviews, users).

## ⚙️ Setup & Local Installation

Follow these steps to set up and run the project on your local machine.

### Prerequisites

Before you begin, ensure you have the following installed:
* **Node.js (LTS version highly recommended):** Download from [nodejs.org](https://nodejs.org/).
* **npm (Node Package Manager):** Comes bundled with Node.js.
* **MongoDB Atlas Account:** For cloud database hosting, or a local MongoDB instance.

**1. Clone the Repository**

Start by cloning the project repository to your local machine:

```bash
git clone https://github.com/anushka525/Full-Stack-Travel-Web-Application.git
cd full-stack-travel-web-application

**2. Install Dependencies**
Navigate into your project directory and install all required Node.js packages:

Bash

npm install
# If you prefer using Yarn:
# yarn install

**3. Configure Environment Variables**
This application uses environment variables for sensitive information and configuration. Create a file named .env in the root directory of your project (same level as app.js and package.json).

Add the following variables to your .env file:

ATLASDB_URL
SECRET
PORT
NODE_ENV
ATLASDB_URL

How to get it: Log in to your MongoDB Atlas account, navigate to your cluster, click "Connect," choose "Connect your application," and copy the connection string.

Important: Replace <username>, <password>, and <dbname> in the copied string with your actual database user credentials and the name of your database.

SECRET: A long, random, and complex string used to sign the session ID cookie. This is crucial for security.

PORT: The port number on which your Express server will listen. 8080 is a common choice.

NODE_ENV: Set to development for local testing. It controls whether dotenv loads the variables.

**4. Database Setup**
Ensure your MongoDB Atlas cluster is correctly configured and has a user with network access from your deployment environment (or local IP if running locally). The ATLASDB_URL must be accurate for the application to connect to your database.

▶️ Running the Application Locally
Once all dependencies are installed and environment variables are set, you can start the server:

Bash

node app.js
