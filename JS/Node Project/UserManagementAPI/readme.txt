Features:
Rest API
JWT Authentication
MongoDB CRUD
MVC Architecture
Error Handling
Security Best Practices
Logging

Why This Structure?:
MVC pattern → clean separation of concerns
Scalable → easy to add features
Maintainable → readable & testable

Install Nodemon Globally: npm install -g nodemon
Install libraries: npm i express mongoose jsonwebtoken bcryptjs dotenv

Create JWT Token:
Node.js: Use the built-in crypto module to generate a strong secret from your terminal:
=> node -e "console.log(require('crypto').randomBytes(32).toString('hex'));"
