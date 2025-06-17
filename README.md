📁 Assignment Category: Assignment-11-assignment_category_02

🌐 Live Site URL: 

📝 GitHub Repositories
Client: 

Server: 

🚀 Project Overview
ServiceHub is a full-stack service-sharing web application built with React, Express, MongoDB, and Firebase Authentication. It allows users to add, update, delete, book, and manage services in a seamless and interactive way. This project demonstrates authentication, route protection, data persistence, dynamic status handling, and responsive UI—all designed to give users the best experience in managing and sharing services.

🔑 Key Features
✅ Authentication System with Email/Password and Google Sign-In using Firebase.

🔐 Private Routes with JWT-based route protection—users remain authenticated on reload.

🛠️ Service Management: Logged-in users can add, update, and delete their own services.

📆 Booking System: Users can book any listed service, with booking details saved to the database.

🔄 Service To-Do Dashboard: Service providers can update service status (Pending → Working → Completed).

📱 Responsive Design: Optimized for Desktop, Tablet, and Mobile views.

🎨 Dark/Light Theme Toggle: User-controlled theme switch across the entire application.

🔍 Search Functionality: Instantly filter services based on input keywords.

⚠️ 404 Page: Friendly not-found page with redirect button to Home.

📊 Dynamic Title: Browser tab title updates based on the active route.

📁 Tech Stack
Client: React, Tailwind CSS, Firebase Auth, React Router DOM, Axios, Framer Motion, AOS

Server: Express.js, MongoDB, dotenv, CORS, JWT

📌 Setup Instructions
Clone both the client and server repositories.

Create .env files in both repos for Firebase and MongoDB credentials.

Run npm install in both directories.

Run server with nodemon index.js or node index.js.

Run client with npm run dev.

✅ Deployment Checklist
✔️ Firebase and MongoDB credentials hidden using .env

✔️ Firebase authorized domains configured

✔️ No CORS or 404/504 errors on production

✔️ JWT implemented and verified on private route access

✔️ No redirects to login on reload of private routes 

📽️ Assignment Explanation Video
🎬 A video walkthrough demonstrating major functionalities and showcasing the code is recommended and may be submitted separately.