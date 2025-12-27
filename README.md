Node JWT Authentication Example

This project demonstrates a basic implementation of JWT (JSON Web Token) authentication using Node.js and Express. It is built for learning purposes to understand how login authentication, token generation, and protected routes work. The APIs are tested using Postman.

Features

User login with JWT token generation

Protected route using JWT verification

Custom middleware for token validation

Tested with Postman

API Routes
POST /login

Authenticates the user and returns a JWT token if credentials are valid.

GET /profile

A protected route that can only be accessed with a valid JWT token passed in the Authorization header.

Middleware

verifyToken
This middleware checks for the presence of a JWT token, verifies it using a secret key, and allows access to protected routes if the token is valid.

Tech Stack

Node.js

Express.js

JSON Web Token (JWT)

Postman

How to Run

Clone the repository

Install dependencies

npm install


Start the server

npm start


Test APIs using Postman

Notes

node_modules is ignored using .gitignore

This project is for learning and practice purposes
