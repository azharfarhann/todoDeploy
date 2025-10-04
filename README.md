# To-do App

A full-stack task manager that lets users register, log in, and manage their tasks in a secure way. The app is built with **React, Node.js, Express, and MongoDB**. It provides complete CRUD functionality along with authentication and validation for a smooth experience.

## Features
- User registration and login with JWT-based authentication  
- Secure CRUD operations for tasks (add, update, delete, view)  
- Input validation and error handling for reliable usage  
- Responsive design using React Hooks for seamless usage on any device  

## Tech Stack
- Frontend: React  
- Backend: Node.js, Express  
- Database: MongoDB  
- Authentication: JWT  

## Getting Started
1. Clone the repo  
2. Run `npm install` for both frontend and backend  
3. Add your MongoDB connection string and JWT secret in `.env`  
4. Start the backend server and frontend app  
5. Open in browser and begin managing your tasks  

# Tree

├── README.md
├── client
    ├── .env
    ├── .gitignore
    ├── README.md
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── public
    │   ├── android-chrome-192x192.png
    │   ├── android-chrome-512x512.png
    │   ├── apple-touch-icon.png
    │   ├── favicon-16x16.png
    │   ├── favicon-32x32.png
    │   ├── favicon.ico
    │   ├── site.webmanifest
    │   └── vite.svg
    ├── src
    │   ├── App.jsx
    │   ├── assets
    │   │   ├── logo.png
    │   │   └── register.png
    │   ├── components
    │   │   ├── Footer.jsx
    │   │   └── Header.jsx
    │   ├── index.css
    │   ├── main.jsx
    │   └── pages
    │   │   ├── private
    │   │       ├── Home.jsx
    │   │       └── Profile.jsx
    │   │   └── public
    │   │       ├── Login.jsx
    │   │       ├── Password.jsx
    │   │       └── Register.jsx
    └── vite.config.js
└── server
    ├── .env
    ├── .gitignore
    ├── app.js
    ├── controllers
        ├── private
        │   └── index.js
        └── public
        │   └── index.js
    ├── dist
        ├── android-chrome-192x192.png
        ├── android-chrome-512x512.png
        ├── apple-touch-icon.png
        ├── assets
        │   ├── index-Bt6WBCbP.css
        │   ├── index-QnS_UK54.js
        │   ├── logo-DtWr75IH.png
        │   └── register-CFik7el7.png
        ├── favicon-16x16.png
        ├── favicon-32x32.png
        ├── favicon.ico
        ├── index.html
        ├── site.webmanifest
        └── vite.svg
    ├── middlewares
        └── verifyToken.js
    ├── models
        └── User.js
    ├── package-lock.json
    ├── package.json
    └── utils
        ├── dbConnect.js
        └── sendEmails.js
