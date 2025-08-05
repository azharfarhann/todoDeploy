# todoDeploy
this a todo full stack project deployed at taskly.azharr.live

A full-stack To-Do app where you can add, edit, complete, and delete tasks. The client is built in React using different hooks (useState, useEffect, useNavigate) and communicates with an Express/Node.js backend that persists tasks. Styling is done with tailwind CSS and you’ll see clear form inputs and buttons that respond instantly as you work through your list.

Features

Create, update, and remove tasks

Mark tasks as done or pending

Instant UI updates with React hooks

Data saved on the server via REST endpoints

Tech Stack
React + React Hooks · Express · Node.js · Fetch/Axios · tailwindCSS

Usage
Clone, run npm install in both client/ and server/ folders, then start backend with npm run server and frontend with npm run dev. 

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
