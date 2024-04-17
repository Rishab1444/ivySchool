# IvySchool
Assignment on Node Js and express js
# User Management API

This Node.js application provides a simple RESTful API to manage users in a MongoDB database. It supports operations to create, retrieve, update, and delete user records.

## Prerequisites
Before you begin, ensure you have the following installed on your system:
- Node.js
- npm (Node Package Manager)
- MongoDB
- Postman or curl (for testing the API endpoints)

## Setting Up MongoDB Locally
1. **Install MongoDB**: Follow the official guide to install MongoDB on your platform [here](https://docs.mongodb.com/manual/installation/).

2. **Start MongoDB**: Ensure MongoDB is running on your local machine.
   - On Windows, you might need to start the MongoDB service through the Services app or using the command line.
   - On macOS and Linux, typically run `mongod` in the terminal.

3. **Create a Local Database**:
   - Open a terminal or command prompt.
   - Connect to the MongoDB instance by running `mongo`.
   - Create a new database by running `use userdb`.

## Set Up and Run the Node.js Application

1. **Clone the Repository** (if applicable):
  
   git clone https://github.com/Rishab1444/ivySchool
   cd user-api
## 2.Install Dependencies:
## Navigate to the project directory and install the required npm packages:
npm install
Configure the Application:
Create a .env file in the root directory of the project and add the following line to specify your local MongoDB URI:

MONGODB_URI='mongodb+srv://userDB:test123@cluster0.8wqqgo4.mongodb.net/userdb?retryWrites=true&w=majority'
## Start the Application:
### Run the following command to start the server:
 node server.js
## Interacting with the API
You can use Postman or curl to interact with the API. Below are the available endpoints and how to use them:
### GET All Users
Endpoint: GET /api/users
curl Command:
curl http://localhost:3000/api/users
### Add a New User
Endpoint: POST /api/users
Request Body: Include name, email, and age.
curl Command:
curl -X POST -H "Content-Type: application/json" -d '{"name":"Alice", "email":"alice@example.com", "age":28}' http://localhost:3000/api/users
### Get a Specific User
Endpoint: GET /api/users/:id
curl Command: curl http://localhost:3000/api/users/<user-id>
## Update a User
Endpoint: PUT /api/users/:id
Request Body: Include any of name, email, age that need updating.
curl Command:
curl -X PUT -H "Content-Type: application/json" -d '{"name":"Updated Name", "email":"updated@example.com", "age":29}' http://localhost:3000/api/users/<user-id>
## Delete a User
Endpoint: DELETE /api/users/:id
curl Command:
curl -X DELETE http://localhost:3000/api/users/<user-id>
